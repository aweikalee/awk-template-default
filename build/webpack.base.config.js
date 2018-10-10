const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        'awk': require('../package.json').main // 输出文件名： 入口文件
    },
    output: {
        library: 'awk', // 输出的方法名
        libraryExport: 'default', // 定义输出为入口文件里的 default
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        // cacheDirectory: true // 缓存？
                    }
                }
            },
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "../src"),
                use: 'ts-loader'
            },
            {
                test: /\.(css|scss)$/,
                include: path.resolve(__dirname, "../src"),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },{
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'img',
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'media',
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                include: path.resolve(__dirname, "../src"),
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        /* 单独打包css（否则会打包进js） */
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
    ]
}
