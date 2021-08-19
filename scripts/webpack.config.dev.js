const path = require('path')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')


module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: 'weapp.socket.io.dev.js',
        libraryTarget: 'umd',
    },
})