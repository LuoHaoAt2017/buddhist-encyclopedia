const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

function resolve(...args) {
  return path.resolve(__dirname, ...args);
}

module.exports = merge(config, {
  mode: 'production'
});
