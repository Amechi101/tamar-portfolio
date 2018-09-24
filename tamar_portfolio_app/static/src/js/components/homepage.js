// libs
import $ from 'jquery';
import * as PIXI from 'pixi.js'
import ScrollReveal from 'scrollreveal'

// modules
import Env from '../base/env.js'


class HomePage {

	constructor() {

		this.init();
	}
	init() {
		this.heroSection();
		this.workSection();
		this.pageProgression();
	}
	pageProgression() {
		const progressBar = $('#page-progression');
		let winScrollPostion = Env.$window.scrollTop(0);
		const winHeight = Env.$window.height();
		const docBottom = Env.$document.height();

		let diff = docBottom - winHeight;
		let percent;

		TweenMax.set(progressBar, { width: winScrollPostion} );

		Env.$window.on('scroll', function() {

			winScrollPostion = $(this).scrollTop();
			// diff = docBottom - $(this).height()

			percent = (((100/diff) * winScrollPostion) << 0) + "%";

			TweenMax.to(progressBar, .7, { width: percent } );

			// console.log(winScrollPostion, 'winScrollPostion');
			// console.log(diff, 'docBottom - winHeight in scroll callback');
			// console.log(percent, 'percent');
		});
	}
	heroSection() {

		let canvas;
		let count = 0;
		let raf;
		let tp;
		let preview;
		let displacementSprite;
		let displacementFilter;
		let stage;


		[].slice.call(document.querySelectorAll('.homepage__hero-visual')).forEach((el) => {
			
			let playgroundHeight = Math.round(el.children[0].clientHeight);
			let playgroundWidth = Math.round(el.children[0].clientWidth);

			let renderer = PIXI.autoDetectRenderer(986, 548, {transparent:true});

			// const resize = () => {

			// 	el.children[1].height = Math.round(el.children[0].clientHeight)
			// 	el.children[1].width = Math.round(el.children[0].clientWidth)
			// }
		
			renderer.autoResize = true;

			const setScene = ( url ) => {
				el.appendChild(renderer.view);

		        stage = new PIXI.Container();

		        tp = PIXI.Texture.fromImage( url );
		        
		        preview = new PIXI.Sprite( tp );

		        preview.anchor.x = 0;
		    
		        displacementSprite = PIXI.Sprite.fromImage('https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png');
		        displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

		       	displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

		        displacementSprite.scale.y = 0.6;
		        displacementSprite.scale.x = 0.6;


		        stage.addChild(displacementSprite);

		        stage.addChild(preview);

		        // window.addEventListener('resize', resize, false);
		        // resize();

				animate();
			}


			const animate = () => {
			    raf = requestAnimationFrame( animate );
			            
			    displacementSprite.x = count*10;
				displacementSprite.y = count*10;

				count += 0.05;

			    stage.filters = [displacementFilter];

			    renderer.render(stage);

			    canvas = el.querySelector('canvas');
			}
			
			setScene(el.dataset.heroImage);
		});

	}
	workSection() {
		
		const ScrollRevealController = ScrollReveal({
        	easing: 'ease-out',
        	distance:'10%',
        	viewFactor: 0.25
        });

    	$('.homepage__year').each(function() {

    		const yearSectionEl = $(this);
    		// const yearSectionsIndex = yearSectionEl.data('work-year-index');
    		const workSectionItem = yearSectionEl.find('.homepage__workGrid-item');
    		const workSectionItemClass = workSectionItem.attr('class');

    		ScrollRevealController.reveal('.' + workSectionItemClass);

    		// if( yearSectionsIndex != 0 ) {
    		// --> add within html element: homepage__year: data-work-year-index="{{ forloop.counter0 }}"
    		// 	console.log('scroll reveal hero sections', yearSectionsIndex);

   			const yearSectionWrapper = $('.homepage__hero-wrapper');

    		ScrollRevealController.reveal(yearSectionWrapper);
    		// }	
    	});

	}
}

export default HomePage;