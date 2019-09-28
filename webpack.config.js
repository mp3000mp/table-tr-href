const path = require('path')

module.exports = {
  entry: './src/TableTrHref.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'TableTrHref.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        format: 'stylish',
        fix: false,
        outputReport: {
          filePath: 'eslint.html',
          formatter: 'html',
        },
      },
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }]
  }
}
