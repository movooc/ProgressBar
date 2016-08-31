var path = require('path');
var fs = require('fs');

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// config
var webpackConfig = {
    entry: [
        // bundle: [
        //     'webpack-dev-server/client?http://localhost:8222',
        //     'webpack/hot/only-dev-server',
        //     'jquery'
        // ],
        // app: [
        //     './assets/index.js'
        // ]
                    'webpack-dev-server/client?http://localhost:8333',
            'webpack/hot/only-dev-server',
            'jquery'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            include: [path.resolve(__dirname, 'assets')]
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
        new ExtractTextPlugin('css/[name].css')
    ]
    // devServer: {
    //   contentBase: './dist',
    //   hot: true
    // }
}

// console.log(webpackConfig);
module.exports = webpackConfig;
