const config = require('./webpack.config');
const path = require('path');

module.exports = {
    ...config, 
    target: 'web', 
    entry: {
        app: './src/client/app.tsx'
    }, 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                      loader: "babel-loader",
                      options: {
                        presets: [
                          "@babel/preset-react",
                          "@babel/preset-env",
                          // "linaria/babel",
                        ],
                        plugins: ['@babel/plugin-transform-runtime'],
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
};