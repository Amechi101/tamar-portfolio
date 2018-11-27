// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';
import CSSRulePlugin from "gsap/CSSRulePlugin";

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'

// @TODO rewrite page loading/transition class & methods
class PageEvents {
	constructor() {
		this.init();
	}
	init() {
		this.pageTransitions();
		this.pageLoadingProgress();
	}
	pageLoadingProgress() {
		const stat = document.getElementById("progstat");
		const img = document.images
		const totalImages = img.length;
		
		let imageCount = 0;
		let perc;
		let tImg;
		
		const imgLoaded = () => {
			imageCount += 1;

			perc = ( ((100/totalImages) * imageCount) << 0 ) + "%";

			stat.innerHTML = perc;

			
			if( imageCount === totalImages ) {
				return doneLoading();
			}
		};

		const doneLoading = () => {
			Env.$window.on('load', function() {
				       
				this.pageLoaderAnimations();

			}.bind(this));
		};

		for(let i=0; i < totalImages; i++) {
	    	tImg = new Image();
	      	tImg.onload  = imgLoaded;
	      	tImg.onerror = imgLoaded;
	     	tImg.src = img[i].src;
	    } 
	}
	pageTransitions() {

		var pageSweeper = $('.page-sweeper');
		
		const pageLinkTransition = (e) => {
	    	setTimeout(() => {
		        TweenMax.to(pageSweeper, .4, {autoAlpha:1, y:0, ease: Cubic.Power3 }), setTimeout(() => {
	                location.href = e
	            }, 500)
       		}, 10);
	    };
		
		$('a.tamar-pageTransition').on('click', function( e ) {
			
			var thisTarget = $(this).attr("target"), 
            thisHref = $(this).attr("href");
        
		    var linkHash = /(#).*/gi;
		    var linkHashMatch = thisHref.match(linkHash);

	        function CheckHash() {

	            if ( linkHashMatch != null ) {

	                return linkHashMatch[0];
	            
	            } else {

	                return '#';
	            }
	        }

			if("_blank" != thisTarget && -1 == thisHref.indexOf("mailto") && thisHref != "javascript:void(0);" && 
        	(e.preventDefault(), CheckHash() != thisHref && pageLinkTransition(thisHref)));
		});
	}
	pageLoaderAnimations() {
		const preLoaderWrap = $('.preloader-wrap');
		const logo = $('.header__logo');
		const mainMenu = $('#mainMenuTrigger');
		const workSectionTitle = $('.homepage__title h2')
		const workSectionImage = $('.homepage__hero-visual img');
		const workSectionSubTitle = $('.homepage__hero-TitleContainer-bottom p');
		const workSectionButton = $('.homepage__hero-discoverYear');

		TweenMax.set([logo, mainMenu, workSectionTitle, workSectionSubTitle, workSectionImage, workSectionButton], { opacity: 0 } );

		let workSectionTimeline = '', aboutMenuTimeline = '';

		if ( Env.$body.attr('id') === 'artworkDetail' ){
    		const workSectionYears = $('.homepage__year').map(function(index, element) {
    		
	    		const artwork_year = $(element).data('work-year');
	    		
    			return [$('<span class="u-block">' + artwork_year + '</span>')]
    		}).get().reverse();

    		workSectionTimeline = new TimelineMax({ 
				tweens:[

		   			TweenMax.staggerFromTo(workSectionYears, 1, 
		   				{
		   					autoAlpha: 0
		   				}, 

						{
							autoAlpha: 1,

							onStart: function() {
								
								$(this.target).each(function(index, element) {

									const preloaderYears =  preLoaderWrap.find('.years');

									$(element).appendTo(preloaderYears);

									// console.log(tweenEl, 'tween element');

								});

							},

							onStartParams: ["{self}"],
							
							onComplete: function() {

							 	$(this.target).each(function(index, element) {

									// const tweenEl = $(element).remove();

									TweenMax.to($(element), .7, { css: { autoAlpha: 0, } });

									// console.log(tweenEl, 'remove element');

								});
							
							},

							onCompleteParams: ["{self}"]

						}, 1.5)
		        ]
	    	});
    	}

    	if ( Env.$body.attr('id') === 'about' ){
	  //   	var aboutMenuTween = [
				
			//     TweenMax.to( CSSRulePlugin.getRule("#about .c-mask:after"), .7, { cssRule: { scaleX: 0 } } ),

			//     TweenMax.fromTo($('.about-menu__intro-desc-info .desc-info-1'), .7, { css: { x: 50, opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

			//     TweenMax.fromTo( $('.about-menu__intro-desc-info .desc-info-2'), .7, { css: { x: 70, opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

			//     TweenMax.fromTo( $('.about-menu__intro-desc-bio p'), .7, { y: 30, opacity: 0 }, { y: 0, opacity: 1 } ),

			// ];    

	  //       aboutMenuTimeline = new TimelineMax({ 

			// 	tweens: aboutMenuTween,


			// });

    	};

		const pageLoaderTweens = [

			TweenMax.to($('.pre-loadText'), .7, { css: { autoAlpha:0, display: 'none'} }),

			workSectionTimeline,

			TweenMax.to(preLoaderWrap, .7, { css: { autoAlpha:0, display: 'none'} }),

			TweenMax.staggerTo([logo, mainMenu, workSectionTitle, workSectionSubTitle, workSectionImage, workSectionButton], .7, { opacity: 1 }, 0.3),

			aboutMenuTimeline

		]

		const pageLoaderTimeLine = new TimelineMax({ 

			tweens: pageLoaderTweens,

			paused: true,
                	
            align: 'sequence'
    	});

    	return pageLoaderTimeLine.play();
	}
}

export default PageEvents;