const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const entries = require('./build/entries');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
    openPage: `${entries[0].name}.html`
  }
});
