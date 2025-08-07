import css from './index.module.scss'
import { View } from '@tarojs/components'
import ScratchCard from '@/components/ScratchCard/index'

const Index = () => {
  return (
    <View className={css.container}>
      <ScratchCard />
      <ScratchCard />
    </View>
  )
}

export default Index

