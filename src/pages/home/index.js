import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Image,
  Navigator,
} from '@tarojs/components';
import GFooterNav from '../../components/g-footer-nav';
// import WxParse from '../../components/wxParse/wxParse';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  state = {
    pageBg: 'http://qmfx-s39210.s3.fy.shopex.cn/gpic/20170427/047b64bf5ba53bf3258add6d3cf9c80f.png?imageView2/2/w/346/h/346/interlace/1',
    logo: 'https://avatars1.githubusercontent.com/u/44250517?s=460&v=4',
  };

  componentWillMount() {
    console.log('home', 'componentWillMount');
  }

  componentDidMount() {
    console.log('home', 'componentDidMount');
    // const article = '<div style="color: red">我是HTML代码</div>';
    // WxParse.wxParse('article', 'html', article, this.$scope, 5);
  }

  componentWillUnmount() {
    console.log('home', 'componentWillUnmount');
  }

  componentDidShow() {
    console.log('home', 'componentDidShow');
  }

  componentDidHide() {
    console.log('home', 'componentDidHide');
  }

  render() {
    return (
      <View className="container" style={{background: `url(${this.state.pageBg})`}}>
        <Image className="logo" src={this.state.logo}></Image>
        {
          /*
          <import src='../../components/wxParse/wxParse_baidu.swan'/>
          <template is='wxParse' data='{{{wxParseData:article.nodes}}}'/>
          */
        }
        <GFooterNav></GFooterNav>
        {/*<View className="g-footer-nav-wrap">
          <View className="g-footer-nav">
            <Navigator url="/pages/home/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">首页</View>
              <View className="g-footer-nav-item-desc">Home page</View>
            </Navigator>
            <Navigator url="/pages/service-content/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">服务内容</View>富文本
              <View className="g-footer-nav-item-desc">Service content</View>
            </Navigator>
            <Navigator url="/pages/about-us/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">关于我们</View>富文本
              <View className="g-footer-nav-item-desc">About us</View>
            </Navigator>
            <Navigator url="/pages/contact-us/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">联系我们</View>
              <View className="g-footer-nav-item-desc">Contact us</View>
            </Navigator>
          </View>
        </View>*/}
      </View>
    );
  }
}

