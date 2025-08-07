import Taro from '@tarojs/taro'
import { useEffect, useRef } from 'react'
import { View, Canvas } from '@tarojs/components'
import lottie from 'lottie-miniprogram'
import './index.scss'

const Index = () => {
  const animationRef: any = useRef(null)
  const canvasId = `lottie-${Date.now()}`

  useEffect(() => {
    // 加载并渲染 Lottie 动画
    const loadAnimation = async () => {
      const response = await Taro.request({ url: 'https://ckc-uat.oss-cn-shanghai.aliyuncs.com/hongshanpintu_client/hand/animations/demo.json?v=1.0.0' })
      const animationData = response.data
      console.log('animationData', animationData)
      console.log('总帧数：', animationData.op)
      // 获取 Canvas 上下文
      const query = Taro.createSelectorQuery()
      query.select(`#${canvasId}`)
        .fields({ node: true, size: true })
        .exec((res) => {
          if (!res?.[0]) {
            console.error('未找到 Canvas 元素')
            return
          }

          // 获取 Canvas 节点和尺寸
          const canvas = res[0].node
          const context = canvas.getContext('2d')
          const dpr = Taro.getSystemInfoSync().pixelRatio

          // 设置 Canvas 尺寸（考虑设备像素比，避免模糊）
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          context.scale(dpr, dpr)

          const anim = lottie.loadAnimation({
            renderer: 'canvas',
            // @ts-ignore
            rendererSettings: { canvas, context },
            loop: true,
            autoplay: true,
            animationData
          })

          // 保存动画实例
          animationRef.current = anim
        })
    }

    // 执行加载
    loadAnimation()

    // 页面卸载时销毁动画，释放资源
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [])

  return (
    <View className="pageIndex">
      <View className="container">
        <Canvas className="canvas" id={canvasId} type="2d" />
      </View>
    </View>
  )
}

export default Index

