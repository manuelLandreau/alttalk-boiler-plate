let debug = process.env.NODE_ENV !== "production";
let FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
let webpack = require('webpack');
let path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/app.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'transform-flow-comments', 'lodash'],
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ]
    },
    output: {
        path: __dirname + "/dist/",
        filename: "app.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
        new webpack.LoaderOptionsPlugin({
            options: {
                sassLoader: {
                    includePaths: [
                        './node_modules'
                    ]
                }
            }
        }),
            new FlowBabelWebpackPlugin()
    ],
    watchOptions: { poll: true }
};
