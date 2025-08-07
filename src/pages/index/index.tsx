import Taro from '@tarojs/taro'
import { useEffect, useRef } from 'react'
import { View, Canvas } from '@tarojs/components'
import lottie from 'lottie-miniprogram'
import demoJsonData from '../../animations/demo.json'

const Index = () => {
  // 动画实例引用
  const animationRef = useRef(null)
  // Canvas 唯一ID
  const canvasId = `lottie-${Date.now()}`

  useEffect(() => {
    // 加载并渲染 Lottie 动画
    const loadAnimation = () => {
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


          // 加载本地 Lottie JSON 动画
          console.log('demoJsonData', demoJsonData)
          const anim = lottie.loadAnimation({
            renderer: 'canvas', // 小程序推荐使用 canvas 渲染
            rendererSettings: {
              canvas,
              context
            },
            loop: true, // 循环播放
            autoplay: true, // 自动播放
            // path: JSON.stringify(demoJsonData), // 不支持本地JSON
            path: 'https://ckc-uat.oss-cn-shanghai.aliyuncs.com/hongshanpintu_client/hand/animations/demo.json' // The 'path' is only support http protocol.
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
    <View className="container" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <View style={{ width: '300px', height: '300px' }}>
        <Canvas
          id={canvasId}
          type="2d"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    </View>
  )
}

export default Index

