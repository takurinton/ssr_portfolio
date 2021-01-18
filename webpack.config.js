const path = require('path');
// require("dotenv").config();

module.exports = {
    // mode: process.env.NODE_ENV,
    mode: 'development', 
    target: 'web', 
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
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        useBuiltIns: 'usage',
                        corejs: 3,
                      },
                    ],
                    [
                      '@babel/preset-react',
                      {
                        useBuiltIns: 'usage',
                        corejs: 3,
                      },
                    ],
                  ],
                },
              }, {
                loader: "ts-loader",
                options: {
                  transpileOnly: true,
                  configFile: "tsconfig.json",
                },
              },
            ]
        }
      ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json', '.css', '.scss']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};