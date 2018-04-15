'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const vueLoaderConfig = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        client: './client/index.js'
    },
    output: {
        path: utils.outputPath,
        filename: '[name].js',
        publicPath: config.publicPath,
        // Point sourcemap entries to original disk location
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: true
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.json'],
        alias: {
            root: path.join(__dirname, '../client'),
            components: path.join(__dirname, '../client/components')
        },
        modules: [
            'node_modules',
            resolve('client')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: [/node_modules/]
            },
            {
                test: /\.es6$/,
                loaders: ['babel-loader']
            },
            {
                test: /\.(ico|jpg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: config.title,
            template: path.resolve(__dirname, 'index.html'),
            filename: utils.outputIndexPath
        }),
        // new webpack.LoaderOptionsPlugin(utils.loadersOptions()),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                // to the roor of dist path
                to: './'
            }
        ])
    ],
    target: utils.target
};
