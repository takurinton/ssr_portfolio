const config = require('./webpack.config');
const path = require('path');

module.exports = {
    ...config, 
    target: 'node', 
    entry: {
        server: './src/server/server.tsx', 
        app: './src/client/app.tsx'
    }
}