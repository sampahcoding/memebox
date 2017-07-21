var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/page/homepage/index.html',
    filename: 'index.html',
    inject: 'body'
  });
var StylesheetsPlugin = new ExtractTextPlugin({ // define where to save the file
    filename: 'assets/stylesheets/all.css',
    allChunks: true,
  });

module.exports = {
  entry: [__dirname + '/app/page/homepage/index.js', __dirname + '/app/assets/stylesheets/application.scss'],
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
      },
      {
        test: /\.scss/,
        loader: 'import-glob-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|json|xml|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
        options: {
          publicPath: 'http://localhost:8080/'
        }
      }
    ]
  },
  output: {
    filename: 'script/[hash]/[name].js',
    path: __dirname + '/build'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    StylesheetsPlugin
  ],
  devServer: {
    port: 8080
  }
};
