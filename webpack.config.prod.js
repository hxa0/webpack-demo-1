const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const base = require('./webpack.config.base.js')
module.exports = {
    ...base,
    mode: 'production',

    plugins: [
        ...base.plugins,

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"

        })
    ],
    module: {
        rules: [
            ...base.module.rules, //将base里面的rules拷贝，防止覆盖
            {
                test: /\.css$/,
                //  use: [
                //     'style-loader',
                //      'css-loader'
                //   ]
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader"
                ]
            }
        ]
    }
};