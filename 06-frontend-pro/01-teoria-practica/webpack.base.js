const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader'
    }
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html',
    chunks:['main']
  }),
  new HtmlWebpackPlugin({
    template: 'detail.html',
    filename: 'detail.html',
    chunks: ['detail']
  })
];

module.exports = {
  context: __dirname + '/src',
  entry: {
    main: './index.js',
    detail: './detail.js'
  },
  output: {
     filename: '[name].[contenthash].js',
     clean: true
  },
  module: {
    rules: loaders,
  },
  plugins: plugins
};
