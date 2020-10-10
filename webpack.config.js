var webpack = require('webpack');
var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
    },

    plugins: [
        new HtmlPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            {
                                plugins: [
                                    '@babel/plugin-proposal-class-properties'
                                ]
                            }
                        ]
                    }
                }
            }
        ]
    }

};
