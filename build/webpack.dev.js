const defaultConfig = require('./default')
const path = require('path')

module.exports = Object.assign(defaultConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 9000,
        hot: true
    }
})