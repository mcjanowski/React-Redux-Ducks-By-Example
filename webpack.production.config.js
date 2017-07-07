var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  entry: [
    path.join(__dirname, 'src/main.jsx')
  ],
  output: {
    path: path.join(__dirname, 'dist/administration'),
    filename: 'bundle.js',
    publicPath: '/static/administration/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_URL': JSON.stringify('/admin-api'),
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // .js, .jsx
        loaders: ['babel-loader', 'eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({ fallback: "style-loader", use: "css-loader" })
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(jpe?g|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
}