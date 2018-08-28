const path = require('path');

module.exports = {
	mode: 'development',
	entry: './static/src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'static/dist/js')
	},
	watch: true
}