import './index.scss';
import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Input,
} from '@tarojs/components';

export default class Index extends Component {
  constructor() {
    super(...arguments);
    this.config = {
      navigationBarTitleText: '表单提交',
    };
    this.state = {
      value: '123465',
    };
  }

  componentWillMount() {
    console.log('home', 'componentWillMount');
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  onChange(e) {
    this.setState({
      value: e.detail.value,
    });
  }

  render() {
    return (
      <View>
        <Input type="number" onChange={this.onChange} value={this.state.value}/>
        <View>{this.state.value}</View>
      </View>
    );
  }
}

