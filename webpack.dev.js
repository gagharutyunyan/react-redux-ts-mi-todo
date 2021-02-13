const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
        open: true,
        historyApiFallback: true,
        port: 3000,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
});