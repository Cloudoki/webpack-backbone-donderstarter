var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');
var validate = require('webpack-validator');

module.exports = validate({
  entry: {
    /*'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',*/
    'login': './src/js/login.js',
    'app': './src/js/main.js'
  },

  resolve: {

    // Directories that contain our modules
    root: [
      path.join(helpers.root('src'), "/js"),
      path.join(helpers.root('src'), "/templates"),
      path.join(helpers.root('src'), "/css")
    ],

    // tell webpack to include /node_modules/ into the list of paths it looks in for js modules
    modulesDirectories: ["src", "node_modules"],

    extensions: ["", ".js", ".css", ".scss", ".sass", ".jpg", ".png", ".svg", ".gif"]
  },

  module: {
    loaders: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
      { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery"},
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css!sass-loader'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      Backbone : "backbone"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      chunks: ['app', 'login']
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: 'src/templates/login.html',
      chunks: ['login']
    }),
    new CopyWebpackPlugin([
      { from: 'src/js/Dummy', to: 'js/Dummy'},
      { from: 'src/templates/auth.html', to: 'auth.html'}
    ]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    })
  ]
});
