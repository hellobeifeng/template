const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')

// 根据环境设置webpack
const devServer = {
  host: 'localhost',
  port: 8080,
  historyApiFallback: {
    index: 'index.html'
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  overlay: {
    errors: true
  },
  hot: true,
  open: true,
  proxy: {
    '/api': {
      target: 'http://localhost:9099',
      pathRewrite: {
        '^/api': '/static/mock'
      }
    }
  },
}

let config = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HTMLPlugin({
      title: 'vue 脚手架dd ',
      template: path.join(__dirname, 'template.html'),
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(), // 只能在开发环境使用 和 hot配套使用
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

module.exports = config
