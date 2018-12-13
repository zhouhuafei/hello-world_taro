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
    navigationBarTitleText: '服务内容',
  };

  state = {
    pageBg: 'http://qmfx-s39210.s3.fy.shopex.cn/gpic/20170427/047b64bf5ba53bf3258add6d3cf9c80f.png?imageView2/2/w/346/h/346/interlace/1',
    logo: 'https://avatars1.githubusercontent.com/u/44250517?s=460&v=4',
  };

  componentWillMount() {
    console.log('service-content', 'componentWillMount');
  }

  componentDidMount() {
    console.log('service-content', 'componentDidMount');
    const content = '<div style="color: red">我是HTML代码</div>';
    WxParse.wxParse('content', 'html', content, this.$scope, 5);
  }

  componentWillUnmount() {
    console.log('service-content', 'componentWillUnmount');
  }

  componentDidShow() {
    console.log('service-content', 'componentDidShow');
  }

  componentDidHide() {
    console.log('service-content', 'componentDidHide');
  }

  render() {
    return (
      <View className="container">
        {process.env.TARO_ENV === 'swan' ? (
          <View className="wxParse-wrap">
            <import src='../../components/wxParse/wxParse.swan'/>
            <template is='wxParse' data='{{ {wxParseData:content.nodes} }}'/>
          </View>
        ) : ''}
        {process.env.TARO_ENV === 'weapp' ? (
          <View className="wxParse-wrap">
            <import src='../../components/wxParse/wxParse.wxml'/>
            <template is='wxParse' data='{{ wxParseData:content.nodes }}'/>
          </View>
        ) : ''}
        {process.env.TARO_ENV === 'tt' ? (
          <View className="wxParse-wrap">
            <import src='../../components/wxParse/wxParse.ttml'/>
            <template is='wxParse' data='{{ wxParseData:content.nodes }}'/>
          </View>
        ) : ''}
        <GFooterNav></GFooterNav>
      </View>
    );
  }
}

