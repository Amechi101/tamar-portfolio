// libs
import domready from 'domready'

// modules
import Env from './base/env.js'
import { tweenMaxDefaultEase, artWorkExpandableFunc } from './components/global.js';
import MainMenuUI from './components/mainMenuUI.js';
import HomePage from './components/homepage.js';
import Cursor from './components/cursor.js';
import PageEvents from './components/pageEvents.js';


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
        new PageEvents();

        new HomePage();
        
        new MainMenuUI({
            triggerEl: 'mainMenuTrigger', 
            containerEl: 'mainMenu'
        });

        // cursor
        new Cursor();
    }
}

domready(() => {
    new App()
});


