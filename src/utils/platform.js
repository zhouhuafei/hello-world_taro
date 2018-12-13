export default function () {
  console.log('./src/util/platform.js process.env.NODE_ENV', process.env.NODE_ENV); // 有值
  console.log('./src/util/platform.js process.env.TARO_ENV', process.env.TARO_ENV); // 有值
  if (process.env.TARO_ENV === 'weapp') {
    return {
      name: 'weixin',
      text: '微信',
    };
  }
  return {
    name: 'baidu',
    text: '百度',
  };
};
