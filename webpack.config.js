'use strict';
const NODE_ENV = process.env.NODE_ENV || 'devser';
const NODE_ARCH = process.env.NODE_ARCH || 0;

const webpack = require('webpack');
//assetsPlugin - СОЗДАЕТ ФАЙЛ assets.json С ИНФОРМАЦИЕЙ О СБОРКЕ (hesh)
const assetsPlugin = require('assets-webpack-plugin');
const rimraf = require('rimraf'); //УДАЛЯЕТ СТАРЫЕ JS ФАЙЛЫ ИЗ ПАПКИ
//HtmlWebpackPlugin - СОЗДАЕТ ФАЙЛ /index.html С ОБНОВЛЕННЫМ ПОДКЛЮЧЕННЫМ ФАЙЛОМ app.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');//КОПИРУЕТ ФАЙЛЫ 
const ExtractTextPlugin = require("extract-text-webpack-plugin");//СОЗДАЕТ CSS ФАЙЛ

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const titleHTML = 'ЗАГОЛОВОК';
let t = Date.parse(new Date()); //milliseconds

if (NODE_ENV == 'devser') {
  module.exports = {
    context: __dirname + '/frontend',

    entry: {  // --inline --hot
      main: './main'
    },

    output: {
      path:       __dirname + '/public',
      publicPath: '/',
      filename:   '[name].js'
    },

    module: {
      loaders: [{
        test:    /\.js$/,
        include: __dirname + '/frontend',
        loader:  "babel?presets[]=es2015"
      }, {
        test:   /\.jade$/,
        loader: "jade"
      }, {
        test:   /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
      }, {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }]
    },

    plugins: [
      new ExtractTextPlugin('[name].css', {allChunks: true, disable: false})
    ],

    devServer: {
      contentBase: __dirname + '/backend',
      hot: true
    }
  };
}else if (NODE_ENV == 'testser'){
  module.exports = {
    context: __dirname + '/frontend',

    entry: {
      app: './main'
    },

    output: {
      path:     __dirname + '/public',
      publicPath: '/',  //   /js/app.js
      filename: "[name][chunkhash].js"
    },

    module: {
      loaders: [{
        test:    /\.js$/,
        include: __dirname + '/frontend',
        loader:  "babel?presets[]=es2015"
      }, {
        test:   /\.jade$/,
        loader: "jade"
      }, {
        test:   /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!stylus?resolve url')
      }, {
        test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name][hash:6].[ext]'
      }]
    },

    plugins: [
      {
        apply: (compiler) => {
          rimraf.sync(compiler.options.output.path);
        }
      },
      new ExtractTextPlugin('[name][contenthash].css', {allChunks: true, disable: false}),
      new webpack.NoErrorsPlugin(),
      new assetsPlugin ({
        filename: 'assets.json',
        path: __dirname + '/public'
      }),
      new HtmlWebpackPlugin({title: titleHTML}),
    ],
  };
}else{
  console.log('!!!!!!WEBPACK - АРХИВАЦИЯ и МИНИМИЗАЦИЯ !!!!! ОТМЕНА - npm run devser ИЛИ npm run testser');
  module.exports = {
    context: __dirname + '/frontend',

    entry: {
      app: './main'
    },

    output: {
      path:     __dirname + '/public',
      publicPath: '/',  //   /js/app.js
      filename: "[name][hash].js"
    },
    plugins: [
      // new UglifyJSPlugin(),
      new CopyWebpackPlugin([
        { from: __dirname + '/frontend', to: __dirname + '/frontend_archive/'+ t +'/' }
      ])
    ]
  }
  console.log('THE END');
};