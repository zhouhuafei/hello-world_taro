import Taro, {Component} from '@tarojs/taro';
import Index from './pages/home';

import './app.scss';

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/contact-us/index',
      'pages/about-us/index',
      'pages/service-content/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '商派提供技术支持',
      navigationBarTextStyle: 'black',
    },
  };

  componentDidMount() {
    console.log('app', 'componentDidMount');
  }

  componentDidShow() {
    console.log('app', 'componentDidShow');
  }

  componentDidHide() {
    console.log('app', 'componentDidHide');
  }

  componentDidCatchError() {
    console.log('app', 'componentDidCatchError');
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Index/>
    );
  }
}

Taro.render(<App/>, document.getElementById('app'));
