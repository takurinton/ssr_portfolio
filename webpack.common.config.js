const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require("dotenv").config();

module.exports = {
    mode: process.env.NODE_ENV,
    mode: 'development', 
    entry: {
      client: './src/client/app.tsx'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: [
            "babel-loader",
            "linaria/loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                configFile: "tsconfig.json",
              },
            },
          ]
        }, 
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 
            "css-loader",
          ],
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    ], 
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'api')
    }
};