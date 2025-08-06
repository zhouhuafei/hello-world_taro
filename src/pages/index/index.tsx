import { useState } from 'react'
import { View } from '@tarojs/components'

function HelloWorld () {
  const [name] = useState('World')

  return (
    <View>
      <View>Hello, {name}!</View>
    </View>
  )
}

export default HelloWorld
