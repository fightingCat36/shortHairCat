const defaultConfig = require('./default')

module.exports = Object.assign(defaultConfig, {
    mode: 'production',
    performance: {
        hints: 'warning'
    },
    optimization: {
        namedModules: false,
        namedChunks: false,
        nodeEnv: 'production',
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: true,
        usedExports: true,
        concatenateModules: true,
        splitChunks: {
            hidePathInfo: true,
            minSize: 30000,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            cacheGroups: {
                styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
                }
            },
        },
        noEmitOnErrors: true,
        checkWasmTypes: true,
        minimize: true
    }
})