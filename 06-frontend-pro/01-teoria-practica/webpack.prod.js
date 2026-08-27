const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = [{
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }
];

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })
];

module.exports = merge(base, {
  mode: 'production',
  module: {
    rules: loaders
  },
  plugins: plugins,
  optimization: {
    splitChunks: {
      maxSize: 102400
    }
  }
});
