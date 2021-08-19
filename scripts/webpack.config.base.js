const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/debug/g, process.cwd() + '/support/debug.js'),
    new webpack.NormalModuleReplacementPlugin(/^ws$/g, process.cwd() + '/src/wx-ws.js'),
    new webpack.NormalModuleReplacementPlugin(/^.\/transports\/index$/g, process.cwd() + '/src/transport.js'),
  ],
  module: {
    rules: [{
      test: /engine.io-client\/lib\/socket.js$/,
      loader: 'string-replace-loader',
      options: {
        multiple: [{
          search: '["polling", "websocket"]',
          replace: '["websocket"]',
        }, {
          search: "['polling', 'websocket']",
          replace: "['websocket']",
        }]
      }
    }, {
      test: /engine.io-client\/lib\/transports\/websocket.js$/,
      loader: 'string-replace-loader',
      options: {
        multiple: [{
          search: "typeof window === 'undefined'",
          replace: "typeof window === 'undefined' || typeof window !== 'undefined'",
        }]
      }
    }]
  }
};