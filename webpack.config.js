const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/server.tsx',
    target: 'node',
    node: {
        __filename: false,
        __dirname: false
    },
    externals: [nodeExternals()], 
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
              }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json']
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist/server')
    }
};