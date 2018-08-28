// libs
import $ from 'jquery';
import { TweenMax, TimelineMax } from 'gsap';

// modules
import Env from '../base/env.js'


class Menu {

	constructor(triggerEl, containerEl) {

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
        this.menuContainer = $(this.containerEl);

        // this.MenuIcons = {
        // 	iconTline: '',
        // 	iconMline:'',
        // 	iconBline:''
        // }

        this.MenuIcons = {
        	iconTline: $('<span class="bar tline"></span>').css({top:'20%'}).appendTo(this.menuTrigger),
        	iconMline: $('<span class="bar mline"></span>').css({top:'50%', width:'65%'}).appendTo(this.menuTrigger),
        	iconBline: $('<span class="bar bline"></span>').css({top:'80%'}).appendTo(this.menuTrigger)
        }
  		
  		this.timeLines();
  		this.toggleMenu();
  	}
	timeLines() {
        
        this.menuTimeline = new TimelineMax({

            tweens:[
            
                // menu icons
                new TimelineMax({ tweens:[

                	TweenMax.to([this.MenuIcons.iconTline,this.MenuIcons.iconMline,this.MenuIcons.iconBline] , .7),

           			TweenMax.fromTo(this.MenuIcons.iconTline, .4, {y:'-3%'}, { rotation:-45, y:0, top:'50%' }),
            		TweenMax.to(this.MenuIcons.iconMline, .3, { width:'0%', opacity:0  }),
           		 	TweenMax.fromTo(this.MenuIcons.iconBline, .4, {y:'3%'}, { rotation:45, y:0, top:'50%' }),
        
        		] }),
                
                // menu container
                TweenMax.to(this.menuContainer, .7, {right:'0%', visibility:'visible', ease:Cubic.easeInOut }),
                

                // // menu items animation
                // new TimelineMax({ tweens:[
                    
                //     TweenMax.allFrom(_self.menuItems, .35, { x:'70%', ease:Cubic.easeOut }, .06),

                //     TweenMax.allFromTo(_self.menuItems, .35, { opacity:0 }, { opacity:1, ease:Cubic.easeOut }, .06)
                
                // ], delay:.6 })
        
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
		            console.log('menu test --> open');

		            _self.menuTimeline.play();

		            if( target.attr('id') == 'index-menu-trigger' ) {
		            	
		            	$('.header__logo--name').css('display', 'none');
		            	$('.header__about-menu').css('display', 'none');
		            	$('.header__logo--index').css('display', 'block');

		            }

		            if( target.attr('id') == 'about-menu-trigger' ) {
		            	
		            	/* 

		            		For when the about menu opens.

		            	*/

		            	//remove about button
		            	$('.header__about-menu--open').css('display', 'none');
		            	
		            	//remove name text
		            	$('.header__logo--name').css('display', 'none');

		            	//remove index menu button
		            	$('.index-menu-button').css('display', 'none');
		            	
		            	//show contact button
		            	$('.header__logo--contact').css('display', 'block');

		            	//show close button
		            	$('.header__about-menu--close').css('display', 'block');

		            }

		            Env.$html.addClass('disable-scroll');
		                    
		            TweenMax.set(_self.menuTrigger, {rotation:0});
		                    
		        } else {
		                        
		            _self.isOpen = !_self.isOpen;
		            _self.tween = true;
		            console.log('menu test --> close');

		            if( target.attr('id') == 'index-menu-trigger' ) {
		            
		            	$('.header__logo--name').css('display', 'block');
		            	$('.header__logo--index').css('display', 'none');
		            	
		            	$('.header__about-menu').css('display', 'block');
		        
		            }

		            if( target.attr('id') == 'about-menu-trigger' ) {
		            	
		            	$('.header__about-menu--open').css('display', 'block');
		            	$('.header__about-menu--close').css('display', 'none');
		            	
		            	$('.index-menu-button').css('display', 'block');
		            	
		            	$('.header__logo--name').css('display', 'block');
		            	$('.header__logo--contact').css('display', 'none');
		            	

		            }
		                    
		            _self.menuTimeline.reverse();

		            Env.$html.removeClass('disable-scroll');
		                       
		            TweenMax.set(_self.menuTrigger, {rotation:0});

		        }
		    }

		});
	}
}

export default Menu;