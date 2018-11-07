import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Image,
  Navigator,
} from '@tarojs/components';
import GFooterNav from '../../components/g-footer-nav';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '联系我们',
  };

  state = {
    pageBg: 'http://qmfx-s39210.s3.fy.shopex.cn/gpic/20170427/047b64bf5ba53bf3258add6d3cf9c80f.png?imageView2/2/w/346/h/346/interlace/1',
    logo: 'https://avatars1.githubusercontent.com/u/44250517?s=460&v=4',
  };

  componentWillMount() {
    console.log('contact-us', 'componentWillMount');
  }

  componentDidMount() {
    console.log('contact-us', 'componentDidMount');
  }

  componentWillUnmount() {
    console.log('contact-us', 'componentWillUnmount');
  }

  componentDidShow() {
    console.log('contact-us', 'componentDidShow');
  }

  componentDidHide() {
    console.log('contact-us', 'componentDidHide');
  }

  render() {
    return (
      <View className="container">
        <View className="row">
          <View className="row-item">
            <View className="row-item-title">公司地址</View>
            <View className="row-item-text">上海市宝山区长江路258号</View>
            <View className="row-item-line"></View>
            <View className="row-item-icon iconfont icon-address"></View>
          </View>
          <View className="row-item">
            <View className="row-item-title">联系电话：</View>
            <View className="row-item-text">10105188</View>
            <View className="row-item-line"></View>
            <View className="row-item-icon iconfont icon-tel"></View>
          </View>
          <View className="row-item">
            <View className="row-item-title">邮箱地址：</View>
            <View className="row-item-text">433890721@qq.com</View>
          </View>
          <View className="row-item">
            <View className="row-item-title">QQ号码：</View>
            <View className="row-item-text">433890721</View>
          </View>
        </View>
        <GFooterNav></GFooterNav>
      </View>
    );
  }
}
