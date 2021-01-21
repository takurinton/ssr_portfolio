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
        // {
        //   test: /.s?css$/,
        //   use: ExtractTextWebpack.extract({
        //     fallback: 'style-loader',
        //     use: [
        //       {
        //         loader: 'css-loader',
        //         options: {
        //           sourceMap: true,
        //           importLoader: true
        //         }
        //       },
        //       {
        //         loader: 'postcss-loader',
        //       },
        //       {
        //         loader: 'sass-loader'
        //       }
        //     ]
        //   })
        // }
        // {
        //   test: /\.scss$/, 
        //   use: [
        //     'style-loader', 
        //     'css-loader', 
        //     'sass-loader'
        //   ]
        // }
        { 
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader'
            }
            // 'sass-loader'
          ]
        }
      ]
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: 'css/[name].css',  // /dist/css/client.cssに出力
    //   })
    // ], 
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};