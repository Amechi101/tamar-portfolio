import $ from 'jquery';

const env = {
    $window: $(window),
    $document: $(document),
    $html: $('html, body'),
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