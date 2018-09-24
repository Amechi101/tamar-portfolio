// libs
import $ from 'jquery';
import * as PIXI from 'pixi.js'
import ScrollReveal from 'scrollreveal'

// modules
import Env from '../base/env.js'


class WorkSection {

	constructor() {

		this.yearSections = $('.homepage__year');

		this.init();
	}
	init() {
		this.scrollingEvents();
		this.heroSection();
	}
	heroSection() {

		let playground = document.getElementById('heroImage0');

		
		const hideImg = playground.children[0].style.visibility = 'hidden';
		
		let playgroundHeight = Math.round(playground.children[0].clientHeight);
		let playgroundWidth = Math.round(playground.children[0].clientWidth);


		console.log(playgroundWidth, playgroundHeight);

		let canvas;

		let count = 0;
		let raf;
		let tp;
		let preview;
		let displacementSprite;
		let displacementFilter;
		let stage;


		let renderer = PIXI.autoDetectRenderer(playgroundWidth, playgroundHeight, {transparent:true});
		
		renderer.autoResize = true;
	

		function setScene( url ) {
			playground.appendChild(renderer.view);

	        stage = new PIXI.Container();

	        tp = PIXI.Texture.fromImage(url);
	        
	        preview = new PIXI.Sprite(tp);

	        preview.anchor.x = 0;
	    
	        displacementSprite = PIXI.Sprite.fromImage('https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png');
	        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

	       	displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

	        displacementSprite.scale.y = 0.6;
	        displacementSprite.scale.x = 0.6;


	        stage.addChild(displacementSprite);

	        stage.addChild(preview);

			animate();
		}


		function animate() {
		    raf = requestAnimationFrame(animate);
		            
		    displacementSprite.x = count*10;
			displacementSprite.y = count*10;

			count += 0.05;

		    stage.filters = [displacementFilter];

		    renderer.render(stage);

		    canvas = playground.querySelector('canvas');
		}

		console.log(playground.dataset.heroImage);
		
		setScene(playground.dataset.heroImage);
	}
	scrollingEvents() {
		
		const ScrollRevealController = ScrollReveal({
        	easing: 'ease-out'
        });

    	this.yearSections.each(function() {

    		const yearSectionEl = $(this);
    		// const yearSectionsIndex = yearSectionEl.data('work-year-index');
    		const workSectionItem = yearSectionEl.find('.homepage__workGrid-item');
    		const workSectionItemClass = workSectionItem.attr('class');

    		ScrollRevealController.reveal('.' + workSectionItemClass, {
        		distance:'10%',
        		viewFactor: 0.25
    		});

    // 		if( yearSectionsIndex != 0 ) {
    // 			// console.log('scroll reveal hero sections', yearSectionsIndex);

   	// 			// const yearSectionTitle = $('.homepage__title h2')
				// // const yearSectionImage = $('.homepage__hero-wrapper');
				// // const yearSectionSubTitle = $('.homepage__hero-TitleContainer-bottom p');

    // 			// ScrollRevealController.reveal(yearSectionTitle, {
    // 			// 	delay:200
    // 			// });

    // 			// ScrollRevealController.reveal(yearSectionImage, {
    // 			// 	delay:500
    // 			// });

    // 			// ScrollRevealController.reveal(yearSectionSubTitle, {
    // 			// 	delay:900
    // 			// });
    // 		}	
    	});

	}
}

export default WorkSection;