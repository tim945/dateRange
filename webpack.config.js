/**
 * webpack config file
 */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')

var banner = require('./banner')

var autoprefixer = require('autoprefixer')

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
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=30000&name=[name].[ext]'
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
        new webpack.HotModuleReplacementPlugin(),
        new FaviconsWebpackPlugin({
            logo: './src/Fruit-1.png',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                favicons: true,
                firefox: true,
                windows: false
            }
        }),
        new webpack.BannerPlugin(banner, { raw: true })
    ],
    postcss: function() {
        return {
            defaults: [autoprefixer],
            cleaner: [autoprefixer({ browsers: ['last 2 versions', '> 5%', 'IE 8']})]
        }
    }
}