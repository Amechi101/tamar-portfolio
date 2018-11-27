// libs
import $ from 'jquery';


class BaseMenu {
	constructor({triggerEl, containerEl}) {

		this.triggerEl = triggerEl;
		this.containerEl = containerEl;
		this.isOpen = false;
		this.menuTrigger = $('#' + this.triggerEl);
        this.menuContainer = $('#' + this.containerEl);	

        this.init();
	}
	// ----------------------------------------------------------------------------------------
  	// Public methods
  	// ----------------------------------------------------------------------------------------
  	init() {  
		this.bindMethods();
       	this.addEvents(); 
  	}
  	bindMethods() {
  		this.toggleMenuEvent = this.toggleMenuEvent.bind(this);
  	}
  	addEvents() {
  		this.menuTrigger.on('click', this.toggleMenuEvent);
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
	toggleMenuEvent( event ) {

		event.preventDefault();
       	
	    const target = typeof event === 'undefined' ? this.isOpen : $(event.currentTarget);

	    if( target.attr('id') == this.triggerEl ) {
	            
	        if (!this.isOpen) {  
	            this.menuOpen();
	        } else {             
		        this.menuClose();
	        }
	    }
	}
}

export default BaseMenu;