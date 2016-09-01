var path = require('path');
var fs = require('fs');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// config
var webpackConfig = {
    entry: {
        bundle: [
            'webpack-dev-server/client?http://localhost:8333',
            'webpack/hot/only-dev-server',
            'jquery',
            './assets',
            './assets/progressBar.js'
        ]
        // 'webpack-dev-server/client?http://localhost:8222',
        //     'webpack/hot/only-dev-server',
        //     'jquery',
        //     './assets'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'http://127.0.0.1:8333',
        filename: '[name].js',
        hotUpdateChunkFilename: 'hot-update.js',
        hotUpdateMainFilename: 'hot-update.json'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            loader: 'style-loader!css-loader',
            include: [path.resolve(__dirname, 'assets')]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', 'css', 'scss', 'png', 'jpg', 'jpeg', 'gif']
    },
    plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery"
            }),
            //new ExtractTextPlugin('./index.css', {allChunks:true}),
            new webpack.HotModuleReplacementPlugin()
        ]
}

// console.log(webpackConfig);
module.exports = webpackConfig;
