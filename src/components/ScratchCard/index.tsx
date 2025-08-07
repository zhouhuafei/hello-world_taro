import css from './index.module.scss'
import { View } from '@tarojs/components'
import { useEffect, useState } from 'react'

function Index (props) {
  console.log('======props', props)
  const [resData, setResData] = useState({})
  console.log('======resData', resData)

  useEffect(() => {
    console.log('======useEffect')
    setResData((prev) => ({ ...prev, a: 1, b: 2 }))
  }, [])

  return (
    <View className={css.container}>
      View
    </View>
  )
}

export default Index
