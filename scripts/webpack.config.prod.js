const path = require('path')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.config.base')
const package = require('../package.json')

const TARGET_FLAG = {
    umd: 'umd',
    commonjs: 'cjs',
    'commonjs-module': 'esm'
}

function buildFactory(targets) {
    return targets.map(target => merge(baseConfig, {
      mode: 'production',
      output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: `weapp.socket.io.${TARGET_FLAG[target]}.js`,
        libraryTarget: target,
      }
    }))
}


module.exports = buildFactory(package.targets)