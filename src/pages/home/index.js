import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Image,
  Navigator,
} from '@tarojs/components';
import GFooterNav from '../../components/g-footer-nav';
import WxParse from '../../components/wxParse/wxParse';

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
    const content = '<div style="color: red">我是HTML代码</div>';
    WxParse.wxParse('content', 'html', content, this.$scope, 5);
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
      <View className="container" style={{backgroundImage: `url(${this.state.pageBg})`}}>
        {
          process.env.TARO_ENV === 'weapp' ? 'weapp' : 'swan'
        }
        <Image className="logo" src={this.state.logo}></Image>
        <GFooterNav></GFooterNav>
      </View>
    );
  }
}

