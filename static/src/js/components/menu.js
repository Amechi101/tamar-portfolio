// libs
import $ from 'jquery';
import { TweenMax, TimelineMax, CSSPlugin } from 'gsap';

const plugins = [CSSPlugin];

// modules
import Env from '../base/env.js'


class Menu {

	constructor({triggerEl, containerEl}) {


		this.triggerEl = triggerEl;
		this.containerEl = containerEl;

		// common animated elements: trigger id (string) --> animated elements within menu container 
		// this.animatedOptions = {}

        this.init(); 
	}
	// ----------------------------------------------------------------------------------------
  	// Public methods
  	// ----------------------------------------------------------------------------------------
  	init() {
  		
  		this.tween = false;
        this.isOpen = false;

       
        this.menuTrigger = $('#' + this.triggerEl);
        this.menuContainer = $('.' + this.containerEl);

  		this.aboutMenu();
  		this.toggleMenu();
  	}
	aboutMenu() {

		const aboutMenuTween = [

			TweenMax.to(this.menuContainer, .7, { css: { x:0, visibility:'visible' }, ease: Cubic.easeInOut }),
			
			// TweenMax.to( $('.index-menu-button'), .7, { css: { opacity:0, visibility:'hidden' } }),
                    
	        TweenMax.to( $('.header__logo--name'), .7, { css: { y: '-40em', opacity:0 } }),

			TweenMax.to( $('.header__logo--contact'), .7, { css: { x: 0, opacity:1 } }),

			TweenMax.to( $('.header__about-menu--aboutText'), .7, {	 css: { x:'10em', opacity:0 } }),

		    TweenMax.to( $('.header__about-menu--artworkText'), .7, { css: { y: 0, opacity:1 } }),

		    TweenMax.to( Env.animationMaskTween, .7, { cssRule: { scaleX: 0 } } ),

		    TweenMax.fromTo($('.about-menu__intro-desc-info .desc-info-1'), .7, { css: { x: '30em', opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

		    TweenMax.fromTo( $('.about-menu__intro-desc-info .desc-info-2'), .7, { css: { x: '50em', opacity: 0 } }, { css: { x: 0, opacity: 1 } } ),

		    TweenMax.fromTo( $('.about-menu__intro-desc-bio p'), .7, { y: '20em', opacity: 0 }, { y: 0, opacity: 1 } ),

		    TweenMax.to(Env.$htmlBody, .7, { css: { className:'+=disable-scroll' } })

		]    

        this.aboutMenuTimeline = new TimelineMax({ 

			tweens: aboutMenuTween,
		 
		    paused:true,

		    stagger: 0.1,
                	
            align: 'start'

		});
  
	}
	indexMenu() {

        this.MenuIcons = {
        	iconTline: $('<span class="bar tline"></span>').css({top:'20%'}).appendTo(this.menuTrigger),
        	iconMline: $('<span class="bar mline"></span>').css({top:'50%', width:'65%'}).appendTo(this.menuTrigger),
        	iconBline: $('<span class="bar bline"></span>').css({top:'80%'}).appendTo(this.menuTrigger)
        }
	   

		this.iconsTimeline = new TimelineMax({ 

			tweens:[

	        	TweenMax.to([this.MenuIcons.iconTline,this.MenuIcons.iconMline,this.MenuIcons.iconBline] , .7),

	   			TweenMax.to(this.MenuIcons.iconTline, .4, { rotation:-45, y:0, top:'50%' }),
	    		
	    		TweenMax.to(this.MenuIcons.iconMline, .3, { width:'0%', opacity:0  }),
	   		 	
	   		 	TweenMax.to(this.MenuIcons.iconBline, .4, { rotation:45, y:0, top:'50%' })
	        
	        ], 

            paused:true,
            
            onStart:function () {
                
            },
            
            onComplete:function () {
               
                this.tween = false;
            },
            
            onReverseComplete:function () {
            
                this.tween = false; 
                
            }

    	});
	}
	toggleMenu() {

		const _self = this;

		this.menuTrigger.on('click', function( event ) {
           
		    const target = typeof event === 'undefined' ? _self.isOpen : $(event.currentTarget);

		    if( target.attr('id') == _self.triggerEl ) {
		                
		        if (!_self.isOpen) {  
		               
		        	_self.isOpen = true;
		            _self.tween = true;

		            Env.$body.addClass('is-menu-open');
		            
		            
		            console.log('menu test --> open');

		            switch ( target.attr('id') ) {
		            	case 'about-menu-trigger' :
		          
		            		_self.aboutMenuTimeline.play();
		          
		            		break;

		            	case 'index-menu-trigger' :


			            	$('.header__logo--name').css('display', 'none');
			            	$('.header__about-menu').css('display', 'none');
			            	$('.header__logo--index').css('display', 'block');

		            		_self.iconsTimeline.play();

		            		// _self.menuTimeline.play();

		            		TweenMax.set(_self.menuTrigger, {rotation:0});

		            	break;
		            }

		            // Env.$htmlBody.addClass('disable-scroll');

         
		        } else {
		                        
		            _self.isOpen = !_self.isOpen;
		            _self.tween = true;

		           	_self.menuContainer.animate({ 
			            scrollTop: 0 
			        }, 1000);

			        Env.$htmlBody.removeClass('disable-scroll');

		            console.log('menu test --> close');

		            switch ( target.attr('id') ) {
		            	case 'about-menu-trigger':

		            		_self.aboutMenuTimeline.reverse();

		            		// TweenMax.set(_self.menuContainer,{'scrollTop':0});
		            		
		            		break;
		            	
		            	case 'index-menu-trigger':
		            		
		            		$('.header__logo--name').css('display', 'block');
		            		$('.header__logo--index').css('display', 'none');
		            	
		            		$('.header__about-menu').css('display', 'block');

		            	
							_self.iconsTimeline.reverse();

				    		TweenMax.set(_self.menuTrigger, {rotation:0});
		            		
		            		break;
		            }
		        }
		    }
		});
	}
}

export default Menu;