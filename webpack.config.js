const webpack = require('webpack');
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './index.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },

  resolve: { 
    extensions: ['.ts', '.js'], 
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
    ],
  },

  plugins: [
    new CheckerPlugin(),
  ]
};
