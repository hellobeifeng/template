const path = require('path')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

// 根据环境设置webpack
const config = merge(baseConfig, {
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  entry: {
    app: path.join(__dirname, '../src/main.js'),
    vendor: ['vue']
  },
  module: {
    rules: [
      {
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HTMLPlugin({
      template: path.join(__dirname, 'template.html'),
      inject: true,
      favicon:'./favicon.ico'
    }),
    new ExtractPlugin('styles.[contentHash:8].css'),
    // 实现类库文件的独立打包，注意名字要和上面的vender相同
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // 将 生成在app.js中webpack的相关的代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })
  ]
})

module.exports = config
