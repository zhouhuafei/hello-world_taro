import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Image,
  Navigator,
} from '@tarojs/components';
// import WxParse from '../../components/wxParse/wxParse';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '服务内容',
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
    // const article = '<div style="color: red">我是HTML代码</div>';
    // WxParse.wxParse('article', 'html', article, this.$scope, 5);
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
        {
          /*
          <import src='../../components/wxParse/wxParse_baidu.swan'/>
          <template is='wxParse' data='{{{wxParseData:article.nodes}}}'/>
          */
        }
        <View className="g-footer-nav-wrap">
          <View className="g-footer-nav">
            <Navigator url="/pages/home/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">官方</View>
              <View className="g-footer-nav-item-desc">Home page</View>
            </Navigator>
            <Navigator url="/pages/service-content/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">服务内容</View>{/*富文本*/}
              <View className="g-footer-nav-item-desc">Service content</View>
            </Navigator>
            <Navigator url="/pages/about-us/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">关于我们</View>{/*富文本*/}
              <View className="g-footer-nav-item-desc">About us</View>
            </Navigator>
            <Navigator url="/pages/contact-us/index" className="g-footer-nav-item">
              <View className="g-footer-nav-item-text">联系我们</View>
              <View className="g-footer-nav-item-desc">Contact us</View>
            </Navigator>
          </View>
        </View>
      </View>
    );
  }
}

