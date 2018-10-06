const path = require('path');
const baseWebpackConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: './', // 将指向根目录的文件改为同目录
    },
    plugins: [
        /* 调试用页面 */
        // new HtmlWebpackPlugin({
        //     template: 'index.html'
        // }),

        /* 清空dist */
        new CleanWebpackPlugin(['dist/*'], {
            root: path.resolve(__dirname, '../'),
            dry: false
        }),

        /* js压缩 */
        new UglifyJsPlugin(),

        /* css压缩 */
        new OptimizeCSSPlugin(),
    ]
})