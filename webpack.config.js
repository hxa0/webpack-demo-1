const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base=require('./webpack.config.base.js') //读取文件
module.exports = {
  // mode: 'development',
  ...base,   //引入所有base的属性
   devtool: 'inline-source-map',
    devServer: {
     contentBase: './dist'
   },
  module: {
     
    rules: [
        ...base.module.rules,//将base里面的rules拷贝，防止覆盖
     {
       test: /\.css$/,
       use: [
          'style-loader',
           'css-loader'
        ]
       
      }
     ]
  }
};


  