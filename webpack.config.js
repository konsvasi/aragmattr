var webpack = require('webpack');
var path = require('path');

var DEV = path.resolve(__dirname + '/dev');
var OUTPUT = path.resolve(__dirname + '/output');

var config = {
  entry: DEV + '/app.jsx',
  output: {
    path: OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      include: DEV,
      loader: "babel",
    }]
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
};

module.exports = config;
