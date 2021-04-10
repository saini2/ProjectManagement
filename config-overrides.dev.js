// const path = require('path');
const R = require('ramda');
const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function(config) {
  let webfontLoaderConfig = {
    test: /\.font\.js/,
    use: ['style-loader', 'css-loader', 'webfonts-loader']
  };
  config.module.rules.push(webfontLoaderConfig);
  config.output.filename = 'webdiy/static/js/bundle.js';
  config.output.chunkFilename = 'webdiy/static/js/[name].chunk.js';
  config.plugins.push(
    new webpack.DefinePlugin({
      BASE_PATH: JSON.stringify('/'),
      DEV_MODE_APP: JSON.stringify(process.argv)
    })
  );

  // remove restriction that source files can't be outside src folder
  config.resolve.plugins = config.resolve.plugins.filter(function(p) {
    return R.not(p instanceof ModuleScopePlugin);
  });
};
