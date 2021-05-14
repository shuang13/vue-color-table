const webpackConfig = require('@vue/cli-service/webpack.config.js')
const reporters = ['spec']

if (process.env.COVERAGE) {
  reporters.push(...['coverage', 'coveralls'])
  console.log('join coverage report')
}

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'tests/**/*.spec.js'
    ],
    exclude: [
      'node_modules'
    ],
    preprocessors: {
      '**/*.spec.js': ['webpack', 'coverage']
    },
    webpack: webpackConfig,
    singleRun: true,
    browsers: ['ChromeHeadless'],
    reporters,
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    }
  })
}