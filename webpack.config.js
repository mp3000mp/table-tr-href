const path = require('path');

module.exports = {
  entry: './src/TableTrHref.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'TableTrHref.js'
  },
  module: {
    rules: [{
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }]
  }
};
