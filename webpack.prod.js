const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	output: {
        filename: 'min.bundle.js',
    	path: path.resolve(__dirname, 'tamar_portfolio_app/static/dist/js')
   	}
});