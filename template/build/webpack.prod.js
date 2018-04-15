'use strict';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const OfflinePlugin = require('offline-plugin');
const rm = require('rimraf');
const baseWebpackConfig = require('./webpack.base');
// const pkg = require('../package');
const utils = require('./utils');
const config = require('./config');

if (config.electron) {
    // remove files in dist folder in electron mode
    rm.sync('app/assets/*');
} else {
    // remove dist folder in web app mode
    rm.sync('dist/*');
}

const prodWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: false,
            extract: true,
            usePostCSS: true
        })
    },
    devtool: 'source-map',
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    plugins: [
        new ProgressPlugin(),
        new ExtractTextPlugin('styles.[contenthash:8].css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        // extract vendor chunks
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => {
                return module.resource && (/\.(js|css|es6)$/).test(module.resource) && module.resource.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        // progressive web app
        // it uses the publicPath in webpack config
        new OfflinePlugin({
            relativePaths: false,
            ServiceWorker: {
                events: true,
                navigateFallbackURL: '/'
            },
            AppCache: {
                events: true,
                FALLBACK: { '/': '/' }
            }
        })
    ],
    stats: {
        // Add children information
        children: false,
        // Add chunk information (setting this to `false` allows for a less verbose output)
        chunks: false,
        // Add built modules information to chunk information
        chunkModules: false,
        chunkOrigins: false,
        modules: false
    }
});

module.exports = prodWebpackConfig;
