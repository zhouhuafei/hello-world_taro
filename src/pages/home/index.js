import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Text,
} from '@tarojs/components';
import '../../templates/wxParse/wxParse.scss';
import wxParse from '../../templates/wxParse/wxParse.js';

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
        <import src='../../templates/wxParse/wxParse.wxml'/>
      </View>
    );
  }
}

