var path = require('path'),
    libPath = path.join(__dirname, 'app'),
    pkg = require('./package.json'),
    webpack = require("webpack"),
    extend = require('util')._extend,
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpackConfig = require('./webpack.config.js');

module.exports = extend(webpackConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(libPath, 'app.html')
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
});
