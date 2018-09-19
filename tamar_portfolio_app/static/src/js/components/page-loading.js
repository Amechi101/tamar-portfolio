// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';
import ScrollMagic from 'scrollmagic';
import "animation.gsap";
import "debug.addIndicators";

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'


class PageLoading {

	constructor() {

    	this.workSectionYears = $('.homepage__year').map(function(index, element) {
			const year = $(element).data('work-year');

			return [$('<span class="u-block">' + year + '</span>')]
		}).get().reverse();


		// this.workSectionYears = [

		// $("<span class='u-block'>" + 2018 + "</span>"), 
		// $("<span class='u-block'>" + 2017 + "</span>"), 
		// $("<span class='u-block'>" + 2016 + "</span>"), 
		// $("<span class='u-block'>" + 2015 + "</span>"), 
		// $("<span class='u-block'>" + 2014 + "</span>"),
		// $("<span class='u-block'>" + 2013 + "</span>"),
		// $("<span class='u-block'>" + 2012 + "</span>"),
		// $("<span class='u-block'>" + 2011 + "</span>")
		// ].reverse();

		this.init();
	}
	init() {

		Env.$window.on('load', function() {
	        console.log('page loaded!'); 

	        this.pageLoaderAnimations();

	        Env.$htmlBody.animate({ 
                scrollTop: 0
	        }, 1000);

	    }.bind(this));

	}
	pageLoaderAnimations() {

		const preLoaderWrap = $('.preloader-wrap');

		const logo = $('.header__logo--name');

		const aboutMenu = $('.header__about-menu--aboutText');

		const workSectionTitle = $('.homepage__title h2')

		const workSectionImage = $('.homepage__hero-wrapper');

		const workSectionSubTitle = $('.homepage__hero-TitleContainer-bottom p');

		const workSectionItemOne = $('.col-1 .homepage__workGrid-item').first();

		const indexMenu = $('.index-menu-button');

		const pageLoaderTweens = [

			new TimelineMax({ 

				tweens:[

					TweenMax.set([logo, aboutMenu, workSectionTitle, workSectionImage, workSectionSubTitle, workSectionItemOne, indexMenu], { opacity: 0 } ),

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

									console.log(tweenEl, 'tween element')

								});

							},

							onStartParams: ["{self}"],
							
							onComplete: function() {

							 	$(this.target).each(function(index, element) {

									// const tweenEl = $(element).remove();

									const tweenEl = TweenMax.to($(element), .7, { css: { autoAlpha: 0, display: 'none'} });

									console.log(tweenEl, 'remove element');

								});
							
							},

							onCompleteParams: ["{self}"]

						}, 3)
		        ]
	    	}),


			TweenMax.to(preLoaderWrap, .7, { css: { autoAlpha:0, display: 'none'} }),

			TweenMax.staggerTo([logo, aboutMenu, workSectionTitle, workSectionImage, workSectionSubTitle, workSectionItemOne, indexMenu], .7, { opacity: 1 }, 0.2)
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