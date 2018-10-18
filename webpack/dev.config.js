const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./config');

module.exports = merge.smart(config, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './dist',
    hot: true
  }
});
