// libs
import domready from 'domready'
import { TweenMax } from 'gsap';

// modules
import Menu from './ui_components/menu.js';


class App {
    constructor() {

        // Signature
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            const args = ['\n %c The Real Tamar Halpern. :-) http://tamarhalpern.nyc/ \n\n', 'background: #000000; padding:5px 0;color: #FFFFFF;'];
            
            window.console.log.apply(console, args);
            
        } else if (window.console) {
            window.console.log('The Real Tamar Halpern. :-) --> http://tamarhalpern.nyc/');
        }

        this.browserCheck();
        this.initAnimations();
        this.initComponents();
    }
    browserCheck() {
        // window.Modernizr.addTest('webkit', 'WebkitAppearance' in document.documentElement.style)
    }
    initAnimations() {
        // Default easing for all components
        TweenMax.defaultEase = Cubic.easeOut;
    }
    initComponents() {
        // About CV Menu
        const about_menu = new Menu('about-menu-trigger', '.about-menu');

        const index_menu = new Menu('index-menu-trigger', '.index-menu');
    
    }
}


domready(() => {
    new App()
});


