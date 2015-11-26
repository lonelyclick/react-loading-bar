module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },
    files: [
      'tests.webpack.js'
    ],
    frameworks: [
      'jasmine',
      'phantomjs-shim'
    ],
    plugins: [
      'karma-coverage',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-webpack',
      'karma-phantomjs-shim',
      'karma-spec-reporter'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['spec', 'coverage', 'coveralls'],
    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /(src|node_modules)/,
            loaders: ['babel']
          },
          {
            test: /\.js$/,
            include: /(src)/,
            loaders: ['isparta']
          }
          //
          // {
          //           test: /\.js$/,
          //           include: path.resolve('src/components/'),
          //           loader: 'istanbul-instrumenter'
          //       }
        ],
        loaders: [
          // {
          //   test: /\.(js|jsx)$/,
          //   include: /(src|node_modules)/,
          //   loaders: [
          //     'babel?stage=0'
          //   ]
          // },
          {
            test: /\.css$/,
            /* eslint-disable max-len */
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
            /* eslint-enable max-len */
          }
        ]
      }
    }
  })
}
