// libs
import domready from 'domready'

// modules
import Env from './base/env.js'
import { pageScrollTop, tweenMaxDefaultEase } from './components/global.js';
import IndexMenu from './components/index-menu.js';
import AboutMenu from './components/about-menu.js';
import WorkSection from './components/work-section.js';
import Cursor from './components/cursor.js';
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
        this.initComponents();
    }
    browserCheck() {
        window.Modernizr.addTest('webkit', 'WebkitAppearance' in document.documentElement.style)
    }
    initComponents() {
        // page loading
        const page_loading = new PageLoding();

        // work section
        const work_section = new WorkSection();
        
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

        // cursor
        const cursor = new Cursor();
    }
}

domready(() => {
    new App()
});


