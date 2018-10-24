// libs
import * as PIXI from 'pixi.js'

class PixiPlugin {

	constructor({options = {}}) {

		this.options = options || {};

		this.options = {
			element: document.body,
			stageWidth: 986,
			stageHeight: 548,
			pixiSprites: [],
			displaceScale: [200, 70],
			displacementImage: '',
			autoPlay: true,
			autoPlaySpeed: [10, 3] 
		}

		Object.keys(this.options).forEach((key) => {
      		this.options[key] = (Object.keys(options).indexOf(key) > -1) ? options[key] : this.options[key]
    	});


		//  PIXI VARIABLES
		this.renderer            = new PIXI.autoDetectRenderer( this.options.stageWidth, this.options.stageHeight, { transparent: true });
		this.stage               = new PIXI.Container();
		this.displacementSprite  = new PIXI.Sprite.fromImage( this.options.displacementImage );
		this.displacementFilter  = new PIXI.filters.DisplacementFilter( this.displacementSprite );

		this.init();

	}
	init() {
		this.setScene();
		this.render();
	}
	setScene() {
		
		this.options.element.appendChild( this.renderer.view );

        this.stage.filters = [this.displacementFilter];  

        this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

        if ( this.options.autoPlay === false ) {
	        this.displacementSprite.scale.y = 0;
	        this.displacementSprite.scale.x = 0;
	    }

        this.displacementSprite.scale.y = 0.6;
        this.displacementSprite.scale.x = 0.6;

        this.stage.addChild(this.displacementSprite);

        this.loadPixiSprites( this.options.pixiSprites );

	}
	loadPixiSprites( sprites ) {
		
        var rSprites = this.options.pixiSprites;

        for ( var i = 0; i < rSprites.length; i++ ) {
          
			var texture   = new PIXI.Texture.fromImage( sprites[i] );
			var image     = new PIXI.Sprite( texture );
			
			image.anchor.x = 0;

			this.stage.addChild( image );
        }
	}
	render() {      
        if ( this.options.autoPlay === true ) {

            var ticker = new PIXI.ticker.Ticker();

            ticker.autoStart = this.options.autoPlay;

            ticker.add(( delta ) => {
              
				this.displacementSprite.x += this.options.autoPlaySpeed[0] * delta;
				this.displacementSprite.y += this.options.autoPlaySpeed[1];

				this.renderer.render( this.stage );

            });

        }  else {

            var render = new PIXI.ticker.Ticker();

            render.autoStart = true;

            render.add(function( delta ) {
                this.renderer.render( this.stage );
            });        

        } 
	}
}

export default PixiPlugin;