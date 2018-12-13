// 此处获取不到process.env.TARO_ENV的值，所以我通过process.argv[3]来获取。
const type = process.argv[3]; // swan weapp alipay tt h5 rn
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
console.log('type', type);
console.log('isDevelopment', isDevelopment);
console.log('isProduction', isProduction);
const patterns = [];
if (type === 'swan') {
  patterns.push({
    from: 'diff/baidu/components/wxParse/wxParse.xml',
    to: 'dist/components/wxParse/wxParse.swan',
  });
  patterns.push({
    from: isProduction ? 'diff/baidu/project-build.config.json' : 'diff/baidu/project-dev.config.json',
    to: 'dist/project.swan.json',
  });
}
if (type === 'weapp') {
  patterns.push({
    from: 'diff/weixin/components/wxParse/wxParse.xml',
    to: 'dist/components/wxParse/wxParse.wxml',
  });
  patterns.push({
    from: isProduction ? 'diff/weixin/project-build.config.json' : 'diff/weixin/project-dev.config.json',
    to: 'dist/project.config.json',
  });
}
if (type === 'tt') {
  patterns.push({
    from: 'diff/toutiao/components/wxParse/wxParse.xml',
    to: 'dist/components/wxParse/wxParse.ttml',
  });
  patterns.push({
    from: isProduction ? 'diff/toutiao/project-build.config.json' : 'diff/toutiao/project-dev.config.json',
    to: 'dist/project.config.json',
  });
}

const config = {
  projectName: 'hello-world_taro',
  date: '2018-11-7',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env',
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
      ],
    },
  },
  defineConstants: {},
  copy: {
    patterns: patterns,
    options: {},
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
        },
        url: {
          enable: true,
          limit: 20480,
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
