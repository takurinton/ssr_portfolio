const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
      // server: './src/server/server.tsx', 
      client: './src/client/app.tsx'
    },
    node: {
        __filename: false,
        __dirname: false
    },
    // externals: [nodeExternals()], 
    // devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
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