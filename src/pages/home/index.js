import Taro, {Component} from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import './index.scss';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {
    console.log('app', 'componentWillMount');
  }

  componentDidMount() {
    console.log('app', 'componentDidMount');
  }

  componentWillUnmount() {
    console.log('app', 'componentWillUnmount');
  }

  componentDidShow() {
    console.log('app', 'componentDidShow');
  }

  componentDidHide() {
    console.log('app', 'componentDidHide');
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

