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
		this.workSection();
		this.pageProgressBar();
	}
	pageProgressBar() {
		const progressBar = $('#page-progression');
		let winScrollPostion = Env.$window.scrollTop(0);
		let winHeight = Env.$window.height();
		let docBottom = Env.$document.height();

		let diff = docBottom - winHeight;
		let percent;

		const resize = () => {
			winHeight = Env.$window.height();
			docBottom = Env.$document.height();
		};

		TweenMax.set(progressBar, { width: winScrollPostion} );

		Env.$window.on('scroll', function() {

			resize();

			winScrollPostion = $(this).scrollTop();
			diff = docBottom - winHeight;

			percent = (((100/diff) * winScrollPostion) << 0) + "%";

			TweenMax.to(progressBar, .7, { width: percent } );

			// console.log(winScrollPostion, 'winScrollPostion');
			// console.log(diff, 'docBottom - winHeight in scroll callback');
			// console.log(percent, 'percent');
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

    	
    	$('.homepage__workGrid-img-container').each(function(index) {

    		index += 1

    		var artworkImgContainer = $(this);
    		var artworkImg = artworkImgContainer.find('img');
    		var artWorkImgNaturlWidth = artworkImg.attr('data-width', artworkImg.prop('naturalWidth'));
    		var artWorkImgNaturlHeight = artworkImg.attr('data-height', artworkImg.prop('naturalHeight'));

    		// console.log(artWorkImgNaturlWidth.data('width') + index);

    		if(artWorkImgNaturlWidth.data('width') !== undefined ) {
    			var artWorkImgNaturlWidthAdditive = artWorkImgNaturlWidth.data('width') + index;
    			var artWorkImgNaturlHeightAdditive = artWorkImgNaturlHeight.data('height') + index;

    			// console.log(artWorkImgNaturlWidthAdditive, artWorkImgNaturlHeightAdditive);

    			if(artWorkImgNaturlWidthAdditive > artWorkImgNaturlHeightAdditive) {
    				artworkImgContainer.addClass('homepage__workGrid-item--landscape');
    			}
    		}
    	});

	}
}

export default HomePage;