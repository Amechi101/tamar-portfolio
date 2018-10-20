module.exports = {
	entry: {
    	app: './tamar_portfolio_app/static/src/js/index.js'
   	},
    module: {
    	rules: [
    		{	
    			test: /\.js$/, 
    			exclude: /(node_modules|bower_components)/,
    			use: [
	    			{
	    				loader: 'babel-loader'
          			}
    			]
    		}
    	]
	},
	performance: { hints: false }
};