import Env from '../base/env.js'
import $ from 'jquery';
import device from '../utils/device.js';



class MouseHover {
	constructor() {
		this.init();
	}
	init() {

		this.pointer = $('#pointer');
		this.expandedHoverStateLinks = $("a, .index-menu-button");
		this.hoverEvents();
		this.mousePosition();
	}
	hoverEvents() {

		var _self = this;

		if( !device.isMobile ) {
			$(this.expandedHoverStateLinks).mouseenter(function() {
				
				if( $(this).attr('class') == 'index-menu-link--active' ) {
					
					_self.pointer.addClass("hover--black");
				
				} else {
					_self.pointer.addClass("hover--orangeRed");
				}
				
			
			}).mouseleave(function() {
				if( $(this).attr('class') == 'index-menu-link--active' ) {
					_self.pointer.removeClass("hover--black");
				
				} else {
					_self.pointer.removeClass("hover--orangeRed");
				
				}
			});
		} else {
			_self.pointer.remove();
		}   
	}
	mousePosition() {
		var xMousePos = 0;
		var yMousePos = 0;
		
		Env.$window.on('mousemove',function(event) {
			xMousePos = event.clientX;
			yMousePos = event.clientY;
		}); 

        Env.window.requestAnimationFrame(function PointerMove() {

			this.pointer.css('transform', 'matrix(1, 0, 0, 1, '+xMousePos+', '+yMousePos+')');
			
			Env.window.requestAnimationFrame(PointerMove.bind(this));

		}.bind(this));
	}
}

export default MouseHover;