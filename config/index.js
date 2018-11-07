const config = {
  projectName: 'suibianxiexie_taro',
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
      {from: 'diff/components/wxParse/wxParse_baidu.wxml', to: 'dist/components/wxParse/wxParse_baidu.swan'},
      {from: 'diff/components/wxParse/wxParse_weixin.wxml', to: 'dist/components/wxParse/wxParse_weixin.wxml'},
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
          limit: 10240,
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
