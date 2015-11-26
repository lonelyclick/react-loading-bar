module.exports = function(config) {
  const coverageReporters = [
    { type: 'text-summary' },
    { type: 'html', subdir: 'coverage' }
  ]
  const reporters = ['spec', 'coverage']

  if (config.singleRun) {
    coverageReporters.push({ type: 'lcov', dir: 'coverage/' })
    reporters.push('coveralls')
  }

  config.set({
    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: 'build',
      reporters: coverageReporters
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
      'karma-spec-reporter',
      'karma-coveralls'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters,
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
          },
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
