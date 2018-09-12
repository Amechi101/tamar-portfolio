// libs
import $ from 'jquery';

// modules
import Env from './env.js'


class Menu {
	constructor({triggerEl, containerEl}) {

		this.triggerEl = triggerEl;
		this.containerEl = containerEl;
		this.isOpen = false;
		this.menuTrigger = $('#' + this.triggerEl);
        this.menuContainer = $('.' + this.containerEl);	

        this.init();
	}
	// ----------------------------------------------------------------------------------------
  	// Public methods
  	// ----------------------------------------------------------------------------------------
  	init() {   
       this.toggleMenuEvent(); 
  	}
	menuOpen() {
		this.isOpen = true;
	}
	menuClose() {
	    this.isOpen = !this.isOpen;

       	this.menuContainer.animate({ 
            scrollTop: 0 
        }, 1000);
	}
	toggleMenuEvent() {

		this.menuTrigger.on('click', function( event ) {
           	
		    const target = typeof event === 'undefined' ? this.isOpen : $(event.currentTarget);

		    if( target.attr('id') == this.triggerEl ) {
		            
		        if (!this.isOpen) {
		            
		            this.menuOpen();

		        } else {
		                        
			        this.menuClose();
		        }
		    }
		}.bind(this));
	}
}

export default Menu;