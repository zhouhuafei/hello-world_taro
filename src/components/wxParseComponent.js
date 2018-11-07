import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import WxParse from './wxParse/wxParse';
import './wxParse/wxParse.scss';

/**
 * 需要注意的是，在项目的 config/index.js 文件中，有 copy 模板与样式的操作
 */
export default class ParseComponent extends Component {

  componentWillMount() {
    console.log('wxParseComponent', 'componentWillMount');
  }

  componentDidMount() {
    console.log('wxParseComponent', 'componentDidMount');
    const content = '<div style="color: red">我是HTML代码 - 组件</div>';
    WxParse.wxParse('content', 'html', content, this.$scope, 5);
  }

  render() {
    return (
      <View className="wxParse-wrap">
        {/* 微信小程序 */}
        {/*<import src='./wxParse/wxParse_weixin.wxml'/>
        <template is='wxParse' data='{{wxParseData:content.nodes}}'/>*/}
        {/* 百度小程序 */}
        <import src='./wxParse/wxParse_baidu.swan'/>
        <template is='wxParse' data='{{ {wxParseData:content.nodes} }}'/>
        {/* h5 */}
      </View>
    );
  }
}
