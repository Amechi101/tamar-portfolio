// libs
import $ from 'jquery';
import { TweenMax } from 'gsap';

// modules
import Env from '../base/env.js'

export const tweenMaxDefaultEase = TweenMax.defaultEase = Cubic.easeOut;

export const pageScrollTop = $('.header__logo--name').on('click', function() {
    Env.$htmlBody.animate({ 
        scrollTop: 0
    }, 1000);
});


// Artwork Expanded Image Functionality
export const artWorkExpandableFunc = (function() {
	
	function expandedImgViewerClass() {
		this.$artworkImg = $('.homepage__workGrid-img-container .img-only');
		this.viewerOpenBool = false;
		this.init();
	}

	expandedImgViewerClass.prototype.init = function() {
		this.open();
	};

	expandedImgViewerClass.prototype.build = function( img ) {
		this.$viewer = $('<div class="c-picture-viewer"></div>').appendTo(Env.$body);
		this.$inner = $('<div class="c-picture-viewer_inner"></div>').appendTo(this.$viewer);
		this.$imgClone = $('<img class="c-picture-viewer_image" src="' + img + '" />').appendTo(this.$inner);
		this.$viewerClose = $(' <div class="c-picture-viewer__close-btn"> \
				<span></span> \
				<span></span> \
				</div>').appendTo(this.$viewer);
	};

	expandedImgViewerClass.prototype.transitions = function( expandedImgViewerBaseTweens, bool ) {
		var $self = this;
		
  		var expandedImgViewerTimeline = new TimelineMax({ 

			tweens: expandedImgViewerBaseTweens,
		 
		    paused:true,

		    stagger: 0.3,
                	
            align: 'start',

            onComplete: function() {
            	if ( bool ) {
		        	$self.$viewer.remove();
		        }
			}
		});


		return expandedImgViewerTimeline;
	};

	expandedImgViewerClass.prototype.open = function() {
		var $self = this;
	
		$self.$artworkImg.each(function() {
			
			var $this = $(this);
			var $img = $this.attr('src');

			$this.on('click', function() {
		 		$self.build( $img );
		 		$self.transitions([
		 			TweenMax.to($self.$viewer, .7, { className:'+=open' }),

					TweenMax.to(Env.$htmlBody, .7, { css: { className:'+=disable-scroll' } })

		 			], false).play();

		 		$self.viewerOpenBool = true;
		 		$self.close();
			});	
		
	    });
	
	};

	expandedImgViewerClass.prototype.close = function() {
		if(this.viewerOpenBool) {
			var $self = this;

			var viewerCloseButton = $('.c-picture-viewer__close-btn');

			viewerCloseButton.on('click', function() {
				
				this.viewerOpenBool = false;

				$self.transitions([
		 			TweenMax.to($self.$viewer, .7, { className:'-=open' }),

					TweenMax.to(Env.$htmlBody, .7, { className:'-=disable-scroll' })

		 			], true).play();
				
			});
		}
	};

	new expandedImgViewerClass();

})();

