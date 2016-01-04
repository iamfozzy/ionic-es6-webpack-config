var path              = require('path'),
    libPath           = path.join(__dirname, 'app'),
    wwwPath           = path.join(__dirname, 'www'),
    pkg               = require('./package.json'),
    webpack           = require("webpack"),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(libPath, 'app.js'),
  output: {
    path: wwwPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /[\/]angular\.js$/,
        loader: 'expose?angular!exports?window.angular'
      }, {
        test: /[\/]lodash\.js$/,
        loader: 'expose?_'
      }, {
        test: /\.html$/,
        loader: 'html?removeRedundantAttributes=false'
      }, {
        test: /\.json$/,
        loader: "json"
      }, {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file?name=img/[name].[ext]'
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "ng-annotate?add=true!babel?presets[]=es2015"
      }, {
        test: /\.scss$/,
        loader: "style!css!autoprefixer!sass"
      }, {
        test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
        loader: 'file?name=fonts/[name].[ext]'
      }, {
        test: [/icomoon\.svg/, /icomoon\.eot/, /icomoon\.ttf/, /icomoon\.woff/],
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
    root: [
      libPath,
      path.join(__dirname, 'node_modules')
    ],
    moduleDirectories: [
      'node_modules'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(libPath, 'core/layouts/app.html')
    })
  ]
};
