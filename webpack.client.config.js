const config = require('./webpack.common.config');

module.exports = {
    ...config, 
    target: 'web',
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-react",
                    "@babel/preset-env",
                    "linaria/babel",
                  ],
                },
              },
              "linaria/loader",
              {
                loader: "ts-loader",
                options: {
                  transpileOnly: true,
                  configFile: "tsconfig.json",
                },
              },
            ],
        }
        ]
    }
};