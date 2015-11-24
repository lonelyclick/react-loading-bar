'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const deployLocation = 'examples'

module.exports = {
  entry: {
    Toast: './examples/src/Loading.jsx'
  },
  color: true,
  progress: true,
  output: {
    filename: 'build/[name].js',
    path: path.join(__dirname, deployLocation),
    publicPath: `/${deployLocation}`
  },
  colors: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel?stage=0'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'file?name=/assets/[name].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=/assets/[name].[ext]'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff&name=/assets/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=/assets/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=/assets/[name].[hash].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=/assets/[name].[ext]'
      },
      {
        test: /\.css$/,
        /* eslint-disable max-len */
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        /* eslint-enable max-len */
      }
    ]
  },
  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple'),
    require('precss'),
    require('postcss-reporter')
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/src/index.html',
      inject: 'body',
      filename: 'build/index.html'
    })
  ]
}

if (process.argv.indexOf('--enable-eslint') !== -1) {
  module.exports.module.preLoaders = [
    {
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }
  ]

  module.exports.eslint = {
    configFile: '.eslintrc',
    plugins: [
      'react'
    ]
  }
}
