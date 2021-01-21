const config = require('./webpack.common.config');

module.exports = {
    ...config, 
    target: 'web',
    // module: {
    //     rules: [
    //         { 
    //             test: /(\.scss)$/,
    //             use: [
    //               // loaderは後ろから適用される．Queue
    //               "style-loader", 
    //               "css-loader", 
    //               "sass-loader" 
    //             ]
    //           }, 
    //     ]
    // }
};