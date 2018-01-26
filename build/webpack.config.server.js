const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = webpackMerge(baseConfig, {
  // 定义打包后的内容的执行环境，这里定义为node环境,即服务端运行环境（web:浏览器执行环境）
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/server-entry.js')
  },
  output: {
    filename: 'server-entry.js',
    // 打包后js的模块方案(amd,cmd,commonjs...)
    libraryTarget: 'commonjs2'
  }
})
