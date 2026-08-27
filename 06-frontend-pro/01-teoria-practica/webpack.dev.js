const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const path = require('path');

const loaders = [
  {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }
]
module.exports = merge(base, {
  mode: 'development',
  module: {
    rules: loaders
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true
  },
});
