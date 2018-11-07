import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Text,
} from '@tarojs/components';
import WxParse from '../../components/wxParse/wxParse';

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {
    console.log('index', 'componentWillMount');
  }

  componentDidMount() {
    console.log('index', 'componentDidMount');
    const article = '<div style="color: red">我是HTML代码</div>';
    WxParse.wxParse('article', 'html', article, this.$scope, 5);
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
        <import src='../../components/wxParse/wxParse_baidu.swan'/>
        <template is='wxParse' data='{{{wxParseData:article.nodes}}}'/>
      </View>
    );
  }
}

