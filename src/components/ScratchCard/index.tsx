import css from './index.module.scss'
import { Canvas, View } from '@tarojs/components'
import { useEffect, useState, useRef } from 'react'
import Taro from '@tarojs/taro'

function Index (props) {
  console.log('======props', props)
  const canvasId = 'canvasId'
  const [resData, setResData] = useState({ prize: '谢谢参与' }) // 奖品数据
  console.log('======resData', resData)
  const [isScratched, setIsScratched] = useState(false) // 是否已刮开
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const ctxRef = useRef(null) // Canvas上下文
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 }) // 画布尺寸

  useEffect(() => {
    console.log('======useEffect')
    setResData((prev) => ({ ...prev, a: 1, b: 2 }))
    initCanvas() // 初始化画布
  }, [])

  // 初始化画布
  const initCanvas = () => {
    // 获取画布尺寸
    const query = Taro.createSelectorQuery()
    query.select(`#${canvasId}`)
      .boundingClientRect()
      .exec((res) => {
        if (res && res[0]) {
          const { width, height } = res[0]
          setCanvasSize({ width, height })

          // 获取微信小程序Canvas上下文（兼容模式）
          const ctx = Taro.createCanvasContext(canvasId)
          ctxRef.current = ctx

          // 绘制灰色遮罩层（刮刮乐覆盖层）
          ctx.setFillStyle('#cccccc')
          ctx.fillRect(0, 0, width, height)
          ctx.draw() // 绘制到画布
        }
      })
  }

  // 触摸开始
  const handleTouchStart = (e) => {
    if (isScratched) return
    const { x, y } = e.touches[0]
    setStartX(x)
    setStartY(y)
  }

  // 触摸移动（刮擦逻辑）
  const handleTouchMove = (e) => {
    if (isScratched) return
    const { x, y } = e.touches[0]
    const ctx: any = ctxRef.current
    if (!ctx) return

    // 关键：使用微信支持的合成模式（替代setGlobalCompositeOperation）
    // 注意：微信基础库2.10.0+才支持'destination-out'
    ctx.globalCompositeOperation = 'destination-out'

    // 绘制刮痕（圆形笔触）
    ctx.beginPath()
    ctx.setLineCap('round') // 线条端点圆润
    ctx.setLineJoin('round') // 线条拐角圆润
    ctx.setLineWidth(30) // 刮痕粗细
    ctx.moveTo(startX, startY)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.draw(true) // 保留之前的绘制内容

    // 更新起点
    setStartX(x)
    setStartY(y)

    // 检测刮开面积
    checkScratchArea()
  }

  // 检测刮开面积（超过70%自动完全刮开）
  const checkScratchArea = () => {
    const { width, height } = canvasSize
    if (!width || !height) return

    Taro.canvasGetImageData({
      canvasId,
      x: 0,
      y: 0,
      width,
      height,
      success: (res) => {
        const { data } = res
        let transparentCount = 0

        // 计算透明像素（每4个值为一个像素的RGBA，第4个是透明度）
        for (let i = 3; i < data.length; i += 4) {
          if (data[i] === 0) transparentCount++
        }

        // 计算比例
        const ratio = transparentCount / (data.length / 4)
        if (ratio > 0.7) {
          setIsScratched(true)
          clearAllMask() // 完全清除遮罩
        }
      }
    })
  }

  // 完全清除遮罩
  const clearAllMask = () => {
    const { width, height } = canvasSize
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
        id={canvasId}
        canvasId={canvasId}
        className={css.canvas}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      />
    </View>
  )
}

export default Index
