// libs
import $ from 'jquery';

const env = {
    window: window,
    document: document,
    $window: $(window),
    $document: $(document),
    $htmlBody: $('html, body'),
    $html: $('html'),
    $body: $('body'),
}

export default env;