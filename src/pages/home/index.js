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
    navigationBarTitleText: '首页',
  };

  state = {
    pageBg: 'http://qmfx-s39210.s3.fy.shopex.cn/gpic/20170427/047b64bf5ba53bf3258add6d3cf9c80f.png?imageView2/2/w/346/h/346/interlace/1',
    logo: 'https://avatars1.githubusercontent.com/u/44250517?s=460&v=4',
  };

  componentWillMount() {
    console.log('index', 'componentWillMount');
  }

  componentDidMount() {
    console.log('index', 'componentDidMount');
    // const article = '<div style="color: red">我是HTML代码</div>';
    // WxParse.wxParse('article', 'html', article, this.$scope, 5);
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
      <View className="container" style={{background: `url(${this.state.pageBg})`}}>
        <Image className="logo" src={this.state.logo}></Image>
        {
          /*
          <import src='../../components/wxParse/wxParse_baidu.swan'/>
          <template is='wxParse' data='{{{wxParseData:article.nodes}}}'/>
          */
        }
        <View className="footer-nav-wrap">
          <View className="footer-nav">
            <View className="footer-nav-item">
              <View className="footer-nav-item-text">官方首页</View>
              <View className="footer-nav-item-desc">Home page</View>
            </View>
            <View className="footer-nav-item">
              <View className="footer-nav-item-text">服务内容</View>{/*富文本*/}
              <View className="footer-nav-item-desc">Service content</View>
            </View>
            <View className="footer-nav-item">
              <View className="footer-nav-item-text">关于我们</View>{/*富文本*/}
              <View className="footer-nav-item-desc">About us</View>
            </View>
            <View className="footer-nav-item">
              <View className="footer-nav-item-text">联系我们</View>
              <View className="footer-nav-item-desc">Contact us</View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

