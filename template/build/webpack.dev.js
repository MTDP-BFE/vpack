'use strict';
process.env.NODE_ENV = 'development';

const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const FriendlyErrors = require('friendly-errors-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'eval-source-map',
    devServer: {
        quiet: true
    },
    module : {
        rules: utils.styleLoaders({sourceMap: true, usePostCSS: true})
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrors()
    ]
})

module.exports = devWebpackConfig;
