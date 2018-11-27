// libs
import $ from 'jquery';
import ScrollReveal from 'scrollreveal'

// modules
import Env from '../base/env.js'

class About {

	constructor() {

		this.init();
	}
	init() {
		this.workSection();
		// this.pageProgressBar();
	}
	workSection() {
		var aboutMenuTween = [

 			TweenMax.set(Env.$html, { css: { className:'+=is-menu-open'} }),

 			TweenMax.to(Env.$htmlBody, .7, { css: { className:'+=disable-scroll' } }),

			TweenMax.to(this.menuContainer, .7, { css: { x: 0, visibility:'visible' } }),
			
			TweenMax.to( $('.index-menu-button'), .7, { css: { autoAlpha: 0 } }),
                    
	        TweenMax.to( $('.header__logo--name'), .7, { css: { y: -70, autoAlpha:0 } }),

			TweenMax.to( $('.header__logo--contact'), .7, { css: { x: 0, autoAlpha:1 } }),

			TweenMax.to( $('.header__about-menu--aboutText'), .7, {	 css: { x: 100, autoAlpha:0 } }),

		    TweenMax.to( $('.header__about-menu--artworkText'), .7, { css: { y: -9, autoAlpha:1 } }),

		    TweenMax.to( CSSRulePlugin.getRule(".is-menu-open .c-mask:after"), .7, { cssRule: { scaleX: 0 } } ),

		    TweenMax.fromTo($('.about-menu__intro-desc-info .desc-info-1'), .7, { css: { x: 50, opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

		    TweenMax.fromTo( $('.about-menu__intro-desc-info .desc-info-2'), .7, { css: { x: 70, opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

		    TweenMax.fromTo( $('.about-menu__intro-desc-bio p'), .7, { y: 30, opacity: 0 }, { y: 0, opacity: 1 } ),

		];    

        const aboutMenuTimeline = new TimelineMax({ 

			tweens: aboutMenuTween,
		 
		    paused:true,

		    stagger: 0.1,
                	
            align: 'start'

		});

		return aboutMenuTimeline;
	}

	get
}

export default About;