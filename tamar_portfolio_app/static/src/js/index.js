// libs
import domready from 'domready'

// modules
import Env from './base/env.js'
import { tweenMaxDefaultEase } from './components/global.js';
import IndexMenu from './components/index-menu.js';
import AboutMenu from './components/about-menu.js';
import HomePage from './components/homepage.js';
import Cursor from './components/cursor.js';
import PageLoding from './components/page-loading.js';
import PixiPlugin from './components/pixi-plugin.js';


class App {
    constructor() {

        // Signature
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            const args = ['\n %c The portfolio of the artist, Tamar Halpern. http://tamarhalpern.nyc/ \n\n', 'background: #000000; padding:5px 0; color: #ff4828;'];
            
            window.console.log.apply(console, args);

            
        } else if (window.console) {
            window.console.log('The Best Tamar Halpern. :-) --> http://tamarhalpern.nyc/');
        }

        this.browserCheck();
        this.initComponents();
    }
    browserCheck() {
        window.Modernizr.addTest('webkit', 'WebkitAppearance' in document.documentElement.style)
    }
    initComponents() {
        // page loading
        new PageLoding();

        // homepage
        new HomePage();
        
        // about menu
        new AboutMenu({
            triggerEl: 'about-menu-trigger', 
            containerEl: 'about-menu'
        });

        // index menu
        new IndexMenu({
            triggerEl: 'index-menu-trigger', 
            containerEl: 'index-menu'
        });


        // document.querySelectorAll('.homepage__hero-visual').forEach(function(el) {
        //     var newImage = new Image();
        //     newImage.style.visibility = 'hidden';
        //     newImage.src = el.dataset.heroImage;
        //     newImage.alt = el.dataset.alt;
            
        //     el.appendChild(newImage);

        //     newImage.onload = function() {
        //         new PixiPlugin({
        //             options: {
        //                 element:el,
        //                 stageWidth:  this.naturalWidth,
        //                 stageHeight:  this.naturalHeight,
        //                 pixiSprites: [  newImage.getAttribute('src') ],
        //                 displaceScale: [800, 500],
        //                 displacementImage: 'https://res.cloudinary.com/dcozrqiyb/image/upload/v1537939713/ripple_2.jpg',
        //                 autoPlay: true,
        //                 autoPlaySpeed: [0.3, 0.3]
        //             }
        //         })
        //     };
        
        // });

        // cursor
        new Cursor();
    }
}

domready(() => {
    new App()
});


