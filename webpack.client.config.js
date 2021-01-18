const config = require('./webpack.config');
const path = require('path');

module.exports = {
    ...config, 
    target: 'web', 
    entry: {
        app: './src/client/app.tsx'
    }
};