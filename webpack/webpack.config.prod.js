const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge.smart(config, {
  mode: 'production',
  devtool: 'cheap-hidden-source-map',
});