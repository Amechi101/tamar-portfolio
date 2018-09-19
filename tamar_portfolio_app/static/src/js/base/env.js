// libs
import $ from 'jquery';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollMagic from 'scrollmagic';

const plugins = [CSSRulePlugin];

const env = {
    window: window,
    document: document,
    $window: $(window),
    $document: $(document),
    $htmlBody: $('html, body'),
    $html: $('html'),
    $body: $('body'),
    animationMaskTween: CSSRulePlugin.getRule(".js .c-mask:after"),
    scrollMagicController: new ScrollMagic.Controller(),
    tablet: false,
    mobile: false,
    phone: false,
    desktop: false,
    ios: false,
    ie11: false,
    edge:false,
    orientation: false,
    isTouch:'ontouchstart' in window,
}

export default env;