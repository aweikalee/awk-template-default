const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: false,
        compress: false, // gzip压缩?
        // hot: true, // 模块热替换
    },
    plugins: [
        // new webpack.NamedModulesPlugin(), // 模块热替换
        // new webpack.HotModuleReplacementPlugin(), // 模块热替换
        /* 调试用页面 */
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
})
