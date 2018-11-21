// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'


class PageLoading {
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
		
		$('a').on('click', function( e ) {
			
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
		const logo = $('.header__logo--name');
		const aboutMenu = $('.header__about-menu--aboutText');
		const workSectionTitle = $('.homepage__title h2')
		const workSectionImage = $('.homepage__hero-visual canvas');
		const workSectionSubTitle = $('.homepage__hero-TitleContainer-bottom p');
		const indexMenu = $('.index-menu-button');

		TweenMax.set([logo, aboutMenu, workSectionTitle, workSectionSubTitle, indexMenu, workSectionImage], { opacity: 0 } );

		let workSectionYears, workSectionTimeline = '';

		if ( Env.$body.attr('id') === 'artworkDetail' ){
    		workSectionYears = $('.homepage__year').map(function(index, element) {
    		
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

		const pageLoaderTweens = [

			TweenMax.to($('.pre-loadText'), .7, { css: { autoAlpha:0, display: 'none'} }),

			workSectionTimeline,

			TweenMax.to(preLoaderWrap, .7, { css: { autoAlpha:0, display: 'none'} }),

			TweenMax.staggerTo([logo, aboutMenu, workSectionTitle, workSectionSubTitle, indexMenu, workSectionImage], .7, { opacity: 1 }, 0.3),
		]

		const pageLoaderTimeLine = new TimelineMax({ 

			tweens: pageLoaderTweens,

			paused: true,
                	
            align: 'sequence'
    	});

    	return pageLoaderTimeLine.play();
	}
}

export default PageLoading;