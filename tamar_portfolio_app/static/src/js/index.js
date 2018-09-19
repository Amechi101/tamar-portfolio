// libs
import $ from 'jquery';
import domready from 'domready'
import { TweenMax } from 'gsap';

// modules
import Env from './base/env.js'
import IndexMenu from './components/index-menu.js';
import AboutMenu from './components/about-menu.js';
import MouseHover from './components/mouse.js';
import PageLoding from './components/page-loading.js';


class App {
    constructor() {

        // Signature
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            const args = ['\n %c The Real Tamar Halpern. :-) http://tamarhalpern.nyc/ \n\n', 'background: #000000; padding:5px 0;color: #FFFFFF;'];
            
            window.console.log.apply(console, args);
            
        } else if (window.console) {
            window.console.log('The Best Tamar Halpern. :-) --> http://tamarhalpern.nyc/');
        }

        this.browserCheck();
        // this.initPageLoading();
        this.initAnimations();
        this.initComponents();
        this.initGlobalComponents();
    }
    browserCheck() {
        window.Modernizr.addTest('webkit', 'WebkitAppearance' in document.documentElement.style);
    }
    initAnimations() {
        // Default easing for all components
        TweenMax.defaultEase = Cubic.easeOut;
    }
    initPageLoading() {
        new PageLoding();
    }
    initGlobalComponents() {
        
        //srcoll to top
        $('.header__logo--name').on('click', function() {
            Env.$htmlBody.animate({ 
                scrollTop: 0
            }, 1000);
        });
        
    }
    initComponents() {
        
        // about menu
        const about_menu = new AboutMenu({
            triggerEl: 'about-menu-trigger', 
            containerEl: 'about-menu'
        });

        // index menu
        const index_menu = new IndexMenu({
            triggerEl: 'index-menu-trigger', 
            containerEl: 'index-menu'
        });

        // // page scrolling events
        // const scrolling = new Scrolling();

        // page mouse hovering event
        const mouse_hover = new MouseHover();
    }
}

domready(() => {
    new App()
});


