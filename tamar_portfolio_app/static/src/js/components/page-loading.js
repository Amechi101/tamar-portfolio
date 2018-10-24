// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'


class PageLoading {

	constructor() {

    	this.workSectionYears = $('.homepage__year').map(function(index, element) {
			const year = $(element).data('work-year');

			return [$('<span class="u-block">' + year + '</span>')]
		}).get().reverse();


		this.init();
	}
	init() {

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

	    
	    for(var i=0; i < totalImages; i++) {
	    	tImg = new Image();
	      	tImg.onload  = imgLoaded;
	      	tImg.onerror = imgLoaded;
	     	tImg.src = img[i].src;
	    }    
		

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

		const pageLoaderTweens = [

			TweenMax.to($('.pre-loadText'), .7, { css: { autoAlpha:0, display: 'none'} }),

			new TimelineMax({ 

				tweens:[

		   			TweenMax.staggerFromTo(this.workSectionYears, 1, 
		   				{
		   					autoAlpha: 0
		   				}, 

						{
							autoAlpha: 1,

							onStart: function() {
								
								$(this.target).each(function(index, element) {

									const preloaderYears =  preLoaderWrap.find('.years');

									const tweenEl = $(element).appendTo(preloaderYears);

									// console.log(tweenEl, 'tween element');

								});

							},

							onStartParams: ["{self}"],
							
							onComplete: function() {

							 	$(this.target).each(function(index, element) {

									// const tweenEl = $(element).remove();

									const tweenEl = TweenMax.to($(element), .7, { css: { autoAlpha: 0, display: 'none'} });

									// console.log(tweenEl, 'remove element');

								});
							
							},

							onCompleteParams: ["{self}"]

						}, 3)
		        ]
	    	}),


			TweenMax.to(preLoaderWrap, .7, { css: { autoAlpha:0, display: 'none'} }),

			TweenMax.staggerTo([logo, aboutMenu, workSectionTitle, workSectionSubTitle, indexMenu, workSectionImage], .7, { opacity: 1 }, 0.3),
		]

		const pageLoaderTimeLine = new TimelineMax({ 

			tweens: pageLoaderTweens,

			paused: true,

		    stagger: 0.7,
                	
            align: 'sequence'
    	});

    	return pageLoaderTimeLine.play();
	}
}

export default PageLoading;