const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const SRSTY = "./src/sass/";
const SRJS = "./src/ts/";

const IS_IN_PROD = false;

module.exports =
{
    mode: IS_IN_PROD ? 'production' : 'development',

    entry: {
        main: [`${SRJS}main.ts`, `${SRSTY}main.scss`]   // Todos os scripts e styles da página principal
    },

    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'}, 
                    {loader: 'resolve-url-loader'}, 
                    {loader: 'sass-loader'}
                ]
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyPlugin({
            patterns: [
              { from: './src/html/*', to: '[name].html' },
              { from: './src/images', to: 'images/' }
            ]
        }),
    ],

    optimization: {
        minimize: IS_IN_PROD ? true : false,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                cache: true,
            }),
        ],
    },

}