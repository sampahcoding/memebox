var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/page/homepage/index.html',
    filename: 'index.html',
    inject: 'body'
  });
var StylesheetsPlugin = new ExtractTextPlugin({ // define where to save the file
    filename: 'assets/stylesheets/[name].css',
    allChunks: true,
  });

module.exports = {
  entry: [__dirname + '/app/page/homepage/index.js', __dirname + '/assets/stylesheets/all.css'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  output: {
    filename: 'script/all.js',
    path: __dirname + '/build'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin({ // define where to save the file
      filename: 'assets/stylesheets/[name].css',
      allChunks: true,
    }),
  ]
};
