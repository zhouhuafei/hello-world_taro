// 此处获取不到process.env.TARO_ENV的值，所以我通过process.argv[3]来获取。
const type = process.argv[3]; // swan weapp alipay tt h5 rn
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';
console.log('type', type);
console.log('isDevelopment', isDevelopment);
console.log('isProduction', isProduction);

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
    patterns: [
      {
        from: 'src/components/wxParse/wxParse.wxml',
        to: 'dist/components/wxParse/wxParse.wxml',
      },
      {
        from: 'src/components/wxParse/wxParse.swan',
        to: 'dist/components/wxParse/wxParse.swan',
      },
      {
        from: process.env.NODE_ENV === 'production' ? 'diff/baidu/project-build.swan.json' : 'diff/baidu/project-dev.swan.json',
        to: 'dist/project.swan.json',
      },
    ],
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
