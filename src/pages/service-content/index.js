import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Image,
  Navigator,
} from '@tarojs/components';
import GFooterNav from '../../components/g-footer-nav';
import WxParseComponent from '../../components/wxParseComponent';

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
        <WxParseComponent></WxParseComponent>
        <GFooterNav></GFooterNav>
      </View>
    );
  }
}

