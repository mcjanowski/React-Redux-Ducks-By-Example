var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    entry: [
        path.join(__dirname, 'src/app.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextWebpackPlugin("style.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'API_URL': JSON.stringify('http://localhost:3000/'),
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
                test: /\.(css|scss)$/,
                loader: ExtractTextWebpackPlugin.extract({ fallback: "style-loader", use: "css-loader!sass-loader" })
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(jpe?g|png|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
}