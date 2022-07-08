const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        path: path.resolve(__dirname, './src/Index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true,
        //assetModuleFilename: [file][ext]
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.(scss|css)$/,
                //exclude: /node_modules/,  => needed to avoid for react-skeleton-loading work
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        port: 3001,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        plugins: [new TsconfigPathsPlugin()],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new ForkTsCheckerWebpackPlugin(),
    ],
}
