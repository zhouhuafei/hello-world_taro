import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Text,
} from '@tarojs/components';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {
    console.log('index', 'componentWillMount');
  }

  componentDidMount() {
    console.log('index', 'componentDidMount');
  }

  componentWillUnmount() {
    console.log('index', 'componentWillUnmount');
  }

  componentDidShow() {
    console.log('index', 'componentDidShow');
  }

  componentDidHide() {
    console.log('index', 'componentDidHide');
  }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    );
  }
}

