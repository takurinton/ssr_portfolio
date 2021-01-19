const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
          test: /\.(sa|sc|c)ss$/, 
          use: [
            'style-loader', 
            'css-loader', 
            'sass-loader'
          ]
        }
      //   { 
      //     test: /\.(sa|sc|c)ss$/,
      //     exclude: /node_modules/,
      //     use: [
      //       MiniCssExtractPlugin.loader,
      //       {
      //         loader: 'css-loader',
      //       },
      //       'sass-loader'
      //     ]
      //   }
      ]
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'css/style.css',  // /dist/css/sample.cssに出力
    //   })
    // ], 
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.css', '.scss']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};