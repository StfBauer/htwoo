//entry can be an array and an include multiple files
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  //When upgrading to webpack 5, change target and update target: 'browserslist',
  entry: {
    liquidreact: path.resolve(__dirname, './lib/index.js')
  },
  //When upgrading to webpack 5, add back to output: chunkLoading: false, wasmLoading: false
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    libraryTarget: 'amd'
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "lib")
    ]
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ["style-loader", "css-loader"]
    }]
  },
  externals: [
    'react',
    'react-dom'
  ]
};