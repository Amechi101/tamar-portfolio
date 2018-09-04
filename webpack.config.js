const path = require('path');

module.exports = {
	mode: 'development',
	entry:'./static/src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'static/dist/js')
	},
	watch: true,
	resolve: {
		alias : {
			"animation.gsap": path.resolve(__dirname, 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
			"debug.addIndicators": path.resolve(__dirname, 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
		}
    },
    module: {
    	rules: [
    		{	
    			test: /\.js$/, 
    			use: 'imports-loader?define=>false'
    		}

    	]
	}
};