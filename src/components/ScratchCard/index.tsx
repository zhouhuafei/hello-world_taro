import css from './index.module.scss'
import { Canvas, View } from '@tarojs/components'
import { useEffect, useState } from 'react'

function Index (props) {
  console.log('======props', props)
  const canvasId = 'canvasId'
  const [resData, setResData] = useState({})
  console.log('======resData', resData)

  useEffect(() => {
    console.log('======useEffect')
    setResData((prev) => ({ ...prev, a: 1, b: 2 }))
  }, [])

  return (
    <View className={css.container}>
      <View className={css.product}>product</View>
      <Canvas className={css.canvas} canvasId={canvasId} />
    </View>
  )
}

export default Index
