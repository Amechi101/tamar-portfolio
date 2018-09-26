// libs
import $ from 'jquery';
import { TweenMax } from 'gsap';

// modules
import Env from '../base/env.js'

export const tweenMaxDefaultEase = TweenMax.defaultEase = Cubic.easeOut;

export const pageScrollTop = $('.header__logo--name').on('click', function() {
    Env.$htmlBody.animate({ 
        scrollTop: 0
    }, 1000);
});