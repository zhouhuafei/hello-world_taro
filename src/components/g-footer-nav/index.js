import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Image,
  Navigator,
} from '@tarojs/components';

export default class Index extends Component {

  componentWillMount() {
    console.log('g-footer-nav', 'componentWillMount');
  }

  componentDidMount() {
    console.log('g-footer-nav', 'componentDidMount');
  }

  render() {
    return (
      <View className="g-footer-nav-wrap">
        <View className="g-footer-nav">
          <Navigator url="/pages/home/index" className="g-footer-nav-item">
            <View className="g-footer-nav-item-text">官方首页</View>
            <View className="g-footer-nav-item-desc">Home page</View>
          </Navigator>
          <Navigator url="/pages/service-content/index" className="g-footer-nav-item">
            <View className="g-footer-nav-item-text">服务内容</View>
            <View className="g-footer-nav-item-desc">Service content</View>
          </Navigator>
          <Navigator url="/pages/about-us/index" className="g-footer-nav-item">
            <View className="g-footer-nav-item-text">关于我们</View>
            <View className="g-footer-nav-item-desc">About us</View>
          </Navigator>
          <Navigator url="/pages/contact-us/index" className="g-footer-nav-item">
            <View className="g-footer-nav-item-text">联系我们</View>
            <View className="g-footer-nav-item-desc">Contact us</View>
          </Navigator>
        </View>
      </View>
    );
  }
}
