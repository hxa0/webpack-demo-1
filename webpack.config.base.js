const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {


    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的首页',
            template: 'src/assets/index.html'
        })

    ],

    module: {



        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', "stylus-loader"] // 将 Stylus 文件编译为 CSS
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'], // 将 Less 编译为 CSS,再转为style标签
            },
            {

                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    { loader: "css-loader" },
                    {
                        loader: "sass-loader",
                        options: { implementation: require("dart-sass") }
                    },

                ]
            }
        ]

    }



};