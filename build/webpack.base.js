const path = require('path')

module.exports = {
  // 输出目录
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/'
  },
  resolve: {
    // 导包时忽略后缀名
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        // 执行优先
        enforce: 'pre',
        test: /.(js|jsx)$/,
        loader: 'eslint-loader',
        // 忽略文件
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /.less/,
        loader: 'less-loader'
      }
    ]
  }
}
