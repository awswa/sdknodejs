// webpack.config.js
//https://serverlessfirst.com/fff-webpacking-lambdas/
//https://www.gorillastack.com/blog/real-time-events/optimizing-your-lambda-cold-starts-with-serverless-webpack/
//https://webpack.js.org/configuration/devtool/

const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    target: 'node',
    entry: slsw.lib.entries,
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    stats: 'minimal',
    node: false,
    // aws-sdk is already available in the Node.js Lambda environment
    //  so it should not be included in function bundles
    externals: [
        'aws-sdk'
    ],
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    /*
    entry: slsw.lib.entries,
    target: 'node',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    stats: 'minimal',
    devtool: 'nosources-source-map',
    performance: {
        hints: false,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
    },
    */
};