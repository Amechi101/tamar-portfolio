// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'
import Menu from '../base/menu.js'


class IndexMenu extends Menu {
	init() {   
		super.init(...arguments);
		
		this.indexEvent();
       
  	}
	indexEvent() {

		const _self = this;
		const workSection = $('.homepage__year');
		const indexMenuEL = $('.index-menu-year a');

		indexMenuEL.on('click', function( event ) {

			const indexYearTarget = $(event.currentTarget).data('index-year');
		
			workSection.each(function() {
				const _selfWorkSection = $(this);
				const workSectionYear = _selfWorkSection.data('work-year');

				if ( workSectionYear === indexYearTarget ) {

					_self.menuClose();

					Env.$htmlBody.animate({ 
                		scrollTop: _selfWorkSection.offset().top - 100
			        }, 1000);
				  
				}
			});

		});
		
	}
	// ----------------------------------------------------------------------------------------
	// Overridden methods
	// ----------------------------------------------------------------------------------------
 	menuOpen() {
 		super.menuOpen(...arguments);

 		const indexMenuTrigger = $('.index-menu-button');

		const indexMenuTweens = [

			TweenMax.to(this.menuContainer, .7, { css: { x:0, visibility:'visible' }, ease: Cubic.easeInOut}),

			new TimelineMax({ 

				tweens:[

		   			TweenMax.to(indexMenuTrigger.find('.tline'), .4, { rotation:-45, y:0, top:'50%' }),
		    		
		    		TweenMax.to(indexMenuTrigger.find('.mline'), .3, { width: 0, opacity:0  }),
		   		 	
		   		 	TweenMax.to(indexMenuTrigger.find('.bline'), .4, { rotation:45, y:0, top:'50%' }),

		   		 	TweenMax.set(indexMenuTrigger.find('span'), { rotation:0 }),
		        ]
	    	}),

			new TimelineMax({ 

				tweens:[

		   			TweenMax.to( $('.header__logo--name'), .7, { css: { y: -70, autoAlpha:0 } }),

					TweenMax.to( $('.header__logo--index'), .7, { css: { x: 0, autoAlpha:1 } }),
		        
		        ]
	    	}),

	    	TweenMax.to( $('.header__about-menu--aboutText'), .7, {	 css: { x: 100, autoAlpha:0 } }),

	    	TweenMax.staggerFromTo( $('.index-menu-year'), .7, { css: { y: 50, autoAlpha:0 } }, { css: { y: 0, autoAlpha:1 } }, 0.1),

	    	TweenMax.to(Env.$htmlBody, .7, { css: { className:'+=disable-scroll' } })
		]    

        this.indexMenuTimeline = new TimelineMax({ 

			tweens: indexMenuTweens,
		 
		    paused:true,

		    stagger: 0.3,
                	
            align: 'start'

		});

		this.indexMenuTimeline.play();

 	}
 	menuClose() {
 		super.menuClose(...arguments);
 		this.indexMenuTimeline.reverse();
 	}	
}


export default IndexMenu;