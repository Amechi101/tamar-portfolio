// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'
import BaseMenu from '../base/menu.js'


class MainMenuUI extends BaseMenu {
	init() {   
		super.init(...arguments);

		var menuBaseTweens = [

			TweenMax.to(this.menuContainer, 1.5, { css: { y:0, autoAlpha:1 }, ease: Power4.easeInOut}),

			TweenMax.to($('.header__logo'), .4, { opacity:0 }),

			new TimelineMax({ 

				tweens:[

		   			TweenMax.to(this.menuTrigger.find('.tline'), .4, { rotation:-45, y:0, top:'50%' }),
		    		
		    		TweenMax.to(this.menuTrigger.find('.mline'), .3, { width: 0, opacity:0  }),
		   		 	
		   		 	TweenMax.to(this.menuTrigger.find('.bline'), .4, { rotation:45, y:0, top:'50%' }),

		   		 	TweenMax.set(this.menuTrigger.find('span'), { rotation:0 }),
		        ]
	    	}),


	    	TweenMax.to(Env.$htmlBody, .7, { css: { className:'+=disable-scroll' } })
		];    

        this.menuTimeline = new TimelineMax({ 

			tweens: menuBaseTweens,
		 
		    paused:true,

		    stagger: 0.3,
                	
            align: 'start'
		});

  	}

	// ----------------------------------------------------------------------------------------
	// Overridden methods
	// ----------------------------------------------------------------------------------------
 	menuOpen() {
 		super.menuOpen(...arguments);
		this.menuTimeline.play();

 	}
 	menuClose() {
 		super.menuClose(...arguments);
 		this.menuTimeline.reverse();
 	}	
}


export default MainMenuUI;