import css from './index.module.scss'
import { Canvas, View } from '@tarojs/components'
import { useEffect, useState, useRef } from 'react'
import Taro from '@tarojs/taro'
import { throttle } from 'lodash'

function Index (props) {
  console.log('props：', props)
  const canvasId = useRef(`canvasId${Date.now()}${Math.random().toString().slice(2)}`)
  const [resData, setResData] = useState({ prize: '谢谢参与' })
  console.log('resData：', resData)
  const [isScratched, setIsScratched] = useState(false)
  const startX = useRef(0)
  const startY = useRef(0)
  const ctxRef: any = useRef(null)
  const canvasSize = useRef({ width: 0, height: 0 })
  const throttledCheckScratchArea = useRef(
    throttle(() => {
      checkScratchArea()
    }, 200)
  ).current

  useEffect(() => {
    console.log('useEffect be triggered')
    setResData((prev) => ({ ...prev, a: 1, b: 2 }))
    initCanvas()
  }, [])

  const initCanvas = () => {
    const query = Taro.createSelectorQuery()
    query.select(`#${canvasId.current}`)
      .boundingClientRect()
      .exec((res) => {
        if (res && res[0]) {
          const { width, height } = res[0]
          canvasSize.current = { width, height }

          const ctx = Taro.createCanvasContext(canvasId.current)
          ctxRef.current = ctx

          ctx.setFillStyle('#cccccc')
          ctx.fillRect(0, 0, width, height)
          ctx.draw()
        }
      })
  }

  const handleTouchStart = (e) => {
    if (isScratched) return
    const { x, y } = e.touches[0]
    startX.current = x
    startY.current = y
  }

  const handleTouchMove = (e) => {
    if (isScratched) return
    const { x, y } = e.touches[0]
    const ctx: any = ctxRef.current
    if (!ctx) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.setLineCap('round')
    ctx.setLineJoin('round')
    ctx.setLineWidth(30)
    ctx.moveTo(startX.current, startY.current)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.draw(true)

    startX.current = x
    startY.current = y

    throttledCheckScratchArea()
  }

  const checkScratchArea = () => {
    const { width, height } = canvasSize.current
    if (!width || !height) return

    Taro.canvasGetImageData({
      canvasId: canvasId.current,
      x: 0,
      y: 0,
      width,
      height,
      success: (res) => {
        const { data } = res
        let transparentCount = 0

        for (let i = 3; i < data.length; i += 4) {
          if (data[i] === 0) transparentCount++
        }

        const ratio = transparentCount / (data.length / 4)
        if (ratio > 0.5) {
          setIsScratched(true)
          clearAllMask()
        }
      }
    })
  }

  const clearAllMask = () => {
    const { width, height } = canvasSize.current
    const ctx: any = ctxRef.current
    if (ctx && width && height) {
      ctx.clearRect(0, 0, width, height)
      ctx.draw(true)
    }
  }

  return (
    <View className={css.container}>
      <View className={css.prizeText}>
        {resData.prize}
      </View>
      <Canvas
        style={{ display: isScratched ? 'none' : 'block' }}
        id={canvasId.current}
        canvasId={canvasId.current}
        className={css.canvas}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />
    </View>
  )
}

export default Index
