const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// require("dotenv").config();

module.exports = {
    // mode: process.env.NODE_ENV,
    mode: 'development', 
    // target: 'web', 
    entry: {
      // server: './src/server/server.tsx', 
      client: './src/client/app.tsx'
    },
    devtool: 'source-map',　// client.js.mapが生成される
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
          test: /.css?$/,
          use: [
            MiniCssExtractPlugin.loader, // これをしてpluginのところにMiniCssExtractPluginを書くとCSSが追加される
            // "style-loader",
            "css-loader",
          //   {
          //     loader: 'sass-loader',
          //   }
          ],
          // exclude: /node_modules/,
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[contenthash].css',  // 
      })
    ], 
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};