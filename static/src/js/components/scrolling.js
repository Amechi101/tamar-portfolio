// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin, AttrPlugin } from 'gsap';
import ScrollMagic from 'scrollmagic';
import "animation.gsap";
import "debug.addIndicators";

const plugins = [CSSPlugin, AttrPlugin];

// modules
import Env from '../base/env.js'


class Scrolling {

	constructor() {

		this.controller = new ScrollMagic.Controller();

        this.init(); 
	}
	// ----------------------------------------------------------------------------------------
  	// Public methods
  	// ----------------------------------------------------------------------------------------
  	init() {


  		this.aboutMenu();
  	}
	aboutMenu() {
		
		const _self = this;

		//section CV titles
		$('.about-menu__cv-title-cover').each(function() {

			const sectionCVTitle = TweenMax.fromTo($(this), .7, { css: { x: -30, autoAlpha: 0 } }, { css: { x: 0, autoAlpha: 1 } } );
			
			new ScrollMagic.Scene(
				{
					triggerElement: this, 
					triggerHook: 'onEnter',
					offset: 200,
					reverse: true
				})
				.setTween(sectionCVTitle)
				.addIndicators()
				.addTo(_self.controller);
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
			
			new ScrollMagic.Scene(
				{
					triggerElement: this, 
					triggerHook: 'onEnter',
					offset: 200,
					reverse: true
				})
				.setTween(polygonTimeline)
				.addIndicators()
				.addTo(_self.controller);
		});
  
	}
	indexMenu() {

	}
}

export default Scrolling;