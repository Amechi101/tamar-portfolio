// libs
import $ from 'jquery';
import CSSRulePlugin from "gsap/CSSRulePlugin";

const plugins = [CSSRulePlugin];

const env = {
    window: window,
    document: document,
    $window: $(window),
    $document: $(document),
    $htmlBody: $('html, body'),
    $html: $('html'),
    $body: $('body'),
    animationMaskTween: CSSRulePlugin.getRule(".c-mask:after, .c-mask:before"),
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