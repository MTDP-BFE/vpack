const path = require('path')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, dir)
}
{{#portm}}
let portm
if (process.env === 'development') {
  try {
    portm = require('./.portm.json')
  }
  catch (e) {
    console.warn(`!!!warning!!! \n 请在根目录下配置.portm.json文件，格式{userToken:"your porm token"}`)
    portm = {}
  }
}
{{/portm}}
// portm 模拟数据地址: http://portm.{{ mtHost }}/api-groups/edit/{{ portmProjectToken }}
let proxyTable = {
  {{#portm}}
  '^/api': {
    target: 'http://portm.{{ mtHost }}',
    headers: {
      'host': 'portm.{{ mtHost }}',
      'Portm-Target': '{{ portmTarget }}',
      'Portm-Token': '{{ portmProjectToken }}',
      'Portm-User': portm && portm.userToken
    }
  },
  {{#watermark}}
  '^/api-wm/*': {
    target: 'http://portm.{{ mtHost }}',
    changeOrigin: true,
    headers: {
      'host': 'portm.{{ mtHost }}',
      'Portm-Target': '{{ portmTarget }}',
      'Portm-Token': '{{ portmProjectToken }}',
      'Portm-User': portm && portm.userToken
    }
  }
  {{/watermark}}
  {{/portm}}
}

// 测试环境
if (process.env.API_ENV === 'test') {
  // some options of test
}
module.exports = {
  devServer: {
    proxy: {
      ...proxyTable,
      '^/weather': {
        target: 'https://www.apiopen.top'
      }
    }
  },
  configureWebpack: config => {
    if (process.env.API_ENV === 'test') {
      config.plugins = [
        ...config.plugins,
         new webpack.DefinePlugin({
          'process.env.API_ENV': '"test"'
        })
      ]
      config.resolve.alias = {
        ...config.resolve.alias,
        'src': resolve('src'),
        'views': resolve('src/views'),
        'styles': resolve('src/styles'),
        'components': resolve('src/components'),
        'utils': resolve('src/utils'),
        'assets': resolve('src/assets'),
        'store': resolve('src/store')
      }
    }
  }
}
