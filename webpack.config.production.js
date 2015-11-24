'use strict'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const cssPath = '/[name].css'
const deployLocation = 'dist'

module.exports = {
  entry: {
    // Loading: './src/loading/Loading.jsx',
    index: './src/index.js'
    // Toast: './src/toast/Toast.jsx'
  },
  colors: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: '/[name].js',
    path: path.join(__dirname, deployLocation),
    library: 'zhihuReactComponent',
    libraryTarget: 'umd'
  },
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=0'
      },
      {
        test: /\.jsx$/, exclude: /node_modules/, loader: 'babel?stage=0'
      },
      {
        test: /\.css$/,
        /* eslint-disable max-len */
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
        /* eslint-enable max-len */
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(cssPath)
  ],
  postcss: [
    require('autoprefixer'),
    require('postcss-color-rebeccapurple'),
    require('precss'),
    require('postcss-reporter')
  ]
}
