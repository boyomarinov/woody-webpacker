'use strict';

// Modules
var webpack = require('webpack');
var HtmlWebpackPlugin = require('./node_modules/html-webpack-plugin');
var CopyWebpackPlugin = require('./node_modules/copy-webpack-plugin');

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://localhost:8081/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            from: __dirname + '/dist'
        }])
    ],
    devServer: {
        contentBase: './dist',
        stats: 'minimal'
    }
};