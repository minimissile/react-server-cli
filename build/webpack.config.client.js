const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
// 如果需要提取webpack公共配置，需要使用到webpack-merge
const webpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base')
const port = require('./config')

const isDev = process.env.NODE_ENV === 'development'

const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
})

// 如果是开发环境
if (isDev) {
  config.entry = {
    // 热更新需要
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/app.js')
    ]
  }
  config.devServer = {
    // 可以用任何方式访问
    host: '0.0.0.0',
    port: port.port_server,
    // webpack实时编译后的文件路径
    contentBase: path.join(__dirname, '../dist'),
    // 启动热加载，即（hot module replacement）
    hot: true,
    // 在编译过程中，如果出现了任何错误，在客户端显示错误信息
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    // 让所有未找到对应路径的请求返回指定页面(如404页面)
    historyApiFallback: {
      index: '/public/template.html'
    },
    // api代理
    // proxy: {
    //   '/api': `http://localhost:${port.port_client}`
    // }
  }
  // 热更新需要引入
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
