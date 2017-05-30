const path = require('path');
const webpack = require('webpack');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './app.js',
		bootstrap: './content/bootstrap.scss',
        vendor: ['angular', 'angular-route', 'angular-animate', 'angular-ui-bootstrap']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new ngAnnotatePlugin({ add: true }),
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", fileName: "vendor.bundle.js" }),
        new ExtractTextPlugin("[name].styles.css"),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
    devtool: '#inline-source-map',
    module: {
        loaders: [{
            test: /\.html$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'html-loader',
            options: {
                minimize: false
            }
        }, {
            test: /\.scss$/,
            exclude: /(node_modules|bower_components)/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }],
            })
        }]
    }
};