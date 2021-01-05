const CompressionPlugin = require("compression-webpack-plugin")

// https://www.webpackjs.com/plugins/compression-webpack-plugin/#%E9%80%89%E9%A1%B9

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 1024*5, // 文件压缩阈值，对超过10 k的进行压缩
        deleteOriginalAssets: true, // 是否删除源文件
        minRatio: 0.8
      })
    ]
  }
}