// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';
import ScrollMagic from 'scrollmagic';
import "animation.gsap";
import "debug.addIndicators";

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'
import Menu from '../base/menu.js'


class AboutMenu extends Menu {
	init() {   
		super.init(...arguments);
       	this.scrollingEvents();
  	}
  	scrollingEvents() {

		//section CV titles
		$('.about-menu__cv-title-cover').each(function() {

			const sectionCVTitleTween = TweenMax.fromTo($(this), .7, { css: { x: -30, autoAlpha: 0 } }, { css: { x: 0, autoAlpha: 1 } } );
			
			const sectionCVTitleScene = new ScrollMagic.Scene(
				{
					triggerElement: this, 
					triggerHook: 'onEnter',
					offset: 200,
					reverse: true
				})
				.setTween(sectionCVTitleTween)
				// .addIndicators()
				.addTo(Env.scrollMagicController);

		});

		//section CV information
		$('.about-menu__cv-item').each(function() {

			const polygonTimeline = new TimelineMax({ 

				tweens: [

					TweenMax.fromTo($(this).find('.about-menu__cv-item-year'), .7, { css: { x: 30, autoAlpha: 0 } }, { css: { x: 0, autoAlpha: 1 } } ),
					TweenMax.fromTo($(this).find('.about-menu__cv-item-post'), .7, { css: { x: 50, autoAlpha: 0 } }, { css: { x: 0, autoAlpha: 1 } } ),
					TweenMax.to($(this).find('rect'), 0.7, { css: { fill: '#ff4828' } } ),
					TweenMax.to($(this).find('polygon'), 0.7, { attr: { points: '0,0 0,10 190,180' } } )

				],

				pasued:true,

			    stagger: 0.3,
	                	
	            align: 'start'

			});
			
			const polygonScene = new ScrollMagic.Scene(
				{
					triggerElement: this, 
					triggerHook: 'onEnter',
					offset: 200,
					reverse: true
				})
				.setTween(polygonTimeline)
				// .addIndicators()
				.addTo(Env.scrollMagicController);
		});
  	}
	
	// ----------------------------------------------------------------------------------------
	// Overridden methods
	// ----------------------------------------------------------------------------------------
 	menuOpen() {
 		super.menuOpen(...arguments);
 		console.log('about menu test --> open');

 		const aboutMenuTween = [

 			TweenMax.set(Env.$html, { css: { className:'+=is-menu-open'} }),

 			TweenMax.to(Env.$htmlBody, .7, { css: { className:'+=disable-scroll' } }),

			TweenMax.to(this.menuContainer, .7, { css: { x: 0, visibility:'visible' }, ease: Cubic.easeInOut}),
			
			TweenMax.to( $('.index-menu-button'), .7, { css: { autoAlpha: 0 } }),
                    
	        TweenMax.to( $('.header__logo--name'), .7, { css: { y: -70, autoAlpha:0 } }),

			TweenMax.to( $('.header__logo--contact'), .7, { css: { x: 0, autoAlpha:1 } }),

			TweenMax.to( $('.header__about-menu--aboutText'), .7, {	 css: { x: 100, autoAlpha:0 } }),

		    TweenMax.to( $('.header__about-menu--artworkText'), .7, { css: { y: -9, autoAlpha:1 } }),

		    TweenMax.to( CSSRulePlugin.getRule(".is-menu-open .c-mask:after"), .7, { cssRule: { scaleX: 0 } } ),

		    TweenMax.fromTo($('.about-menu__intro-desc-info .desc-info-1'), .7, { css: { x: 50, opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

		    TweenMax.fromTo( $('.about-menu__intro-desc-info .desc-info-2'), .7, { css: { x: 70, opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

		    TweenMax.fromTo( $('.about-menu__intro-desc-bio p'), .7, { y: 30, opacity: 0 }, { y: 0, opacity: 1 } ),

		]    

        this.aboutMenuTimeline = new TimelineMax({ 

			tweens: aboutMenuTween,
		 
		    paused:true,

		    stagger: 0.1,
                	
            align: 'start'

		});

		this.aboutMenuTimeline.play();

 	}
 	menuClose() {
 		super.menuClose(...arguments);
 		console.log('about menu test --> close');
 		this.aboutMenuTimeline.reverse();
 	}	
}


export default AboutMenu;