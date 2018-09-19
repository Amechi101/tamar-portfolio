const path = require('path');

module.exports = {
	mode: 'development',
	entry:'./tamar_portfolio_app/static/src/js/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '/tamar_portfolio_app/static/dist/js')
	},
	watch: true,
	resolve: {
		alias : {
			"animation.gsap": path.resolve(__dirname, 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
			"nicescroll": path.resolve(__dirname, 'node_modules/jquery.nicescroll/jquery.nicescroll.js'),
			"locomotive.scroll": path.resolve(__dirname, 'static/dist/js/vendors/locomotiveScroll.js'),
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