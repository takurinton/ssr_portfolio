const config = require('./webpack.common.config');

module.exports = {
    ...config, 
    target: 'node'
}