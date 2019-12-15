const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        path: path.resolve(__dirname,  '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.ts$/, 
                use: 'ts-loader',
                exclude: '/node_modules/'
            },           
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          // only enable hot in development
                            hmr: process.env.NODE_ENV === 'development',
                            // if hmr does not work, this is a forceful method.
                            reloadAll: true
                        },
                    },
                    {
                        loader:'css-loader',
                        options: {
                            // 文件内import语法引入的样式文件，也会先执行之后的两个loader处理
                            importLoaders: 2,
                            // 开启css模块化
                            modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'                  
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    // 适合小图片
                    loader: 'url-loader',
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'src/index.html'
        })
    ]
}