const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

const host = 'localhost'
const port = 8080

const devConfig = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        host,
        port,
        quiet: true, // 控制台不输出内容 由 friendly-errors-webpack-plugin 代替
        contentBase: false,
        compress: false, // gzip压缩?
        // hot: true, // 模块热替换
    },
    plugins: [
        /* 模块热替换 */
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),

        /* 调试用页面 */
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'head', // 将生成的js文件插入html的位置
        }),

        /*  */
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`已运行 http://${host}:${port}`],
            },
            onErrors: false, // 是否隐藏错误详情
            clearConsole: true,
        }),
    ]
})
module.exports = devConfig
