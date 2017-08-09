const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },

  resolve: { 
    extensions: ['.ts', '.tsx', '.js'], 
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    ],
  },
};
