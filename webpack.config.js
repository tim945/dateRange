/**
 * webpack config file
 */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/datetimepicker.js'
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'datetimepicker.js',
        library: 'DatePickerTimer',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.(woff|eot|tff)$/i,
                loader: 'url?limit=10000&name=fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        alias: {
            jquery: 'node_modules/jquery/dist/jquery.min.js'
        },
        extensions: ['', '.js', '.less'],
        root: [path.resolve('./src'), path.resolve('./node_modules')]
    },
    externals: [
        {
            jquery: {
                root: 'jQuery',
                commonjs2: 'jquery',
                commonjs: 'jquery',
                amd: 'jquery'
            }
        }
    ],
    plugins: [
        new ExtractTextPlugin('datetimepicker.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}