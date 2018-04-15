'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./config');

exports.outputPath = config.electron ? path.join(__dirname, '../app/dist') : path.join(__dirname, '../dist');

exports.outputIndexPath = config.electron ? path.join(__dirname, '../app/dist/index.html') : path.join(__dirname, '../dist/index.html');

exports.target = config.electron ? 'electron-renderer' : 'web';

exports.loadersOptions = () => {
    const isProd = process.env.NODE_ENV === 'production';

    function generateLoader(langs) {
        langs.unshift('css-loader?sourceMap&-autoprefixer')
        if (!isProd) {
            return ['vue-style-loader'].concat(langs).join('!')
        }
        return ExtractTextPlugin.extract({
            fallback: 'vue-style-loader',
            use: langs.join('!')
        });
    }

    return {
        minimize: isProd,
        options: {
          // css-loader relies on context
            context: process.cwd(),
            vue: {
                loaders: {
                    css: generateLoader([]),
                    sass: generateLoader(['sass-loader?indentedSyntax&sourceMap']),
                    scss: generateLoader(['sass-loader?sourceMap']),
                    less: generateLoader(['less-loader?sourceMap']),
                    stylus: generateLoader(['stylus-loader?sourceMap']),
                    js: 'babel-loader'
                }
            }
        }
    };
};

exports.cssLoaders = function (options) {
    options = options || {}
  
    const cssLoader = {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
  
    const postcssLoader = {
      loader: 'postcss-loader',
      options: {
        sourceMap: options.sourceMap
      }
    }
  
    function generateLoaders (loader, loaderOptions) {
      const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
  
      if (loader) {
        loaders.push({
          loader: loader + '-loader',
          options: Object.assign({}, loaderOptions, {
            sourceMap: options.sourceMap
          })
        })
      }
  
      if (options.extract) {
        return ExtractTextPlugin.extract({
          use: loaders,
          fallback: 'vue-style-loader'
        })
      } else {
        return ['vue-style-loader'].concat(loaders)
      }
    }
  
    return {
      css: generateLoaders(),
      postcss: generateLoaders(),
      less: generateLoaders('less'),
      sass: generateLoaders('sass', { indentedSyntax: true }),
      scss: generateLoaders('sass'),
      stylus: generateLoaders('stylus'),
      styl: generateLoaders('stylus')
    }
  }
  
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}
