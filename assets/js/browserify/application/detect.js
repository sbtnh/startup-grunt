import { userAgent } from '../utils/utils';

/**
 * Detect features or capabilities and a html class
 */

export function addCapabilities() {
    if(userAgent.isDevice()) {
        $('html').addClass('is-device');
    }

    if(userAgent.isMac() !== -1) {
        $('html').addClass('is-mac');
    }
}

/**
 * Get css breakpoint form body::after
 */

export function getScreenWidth (screenWidth) {
    // IE FIX FOR getComputedStyle
    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop == 'float') prop = 'styleFloat';
                if (re.test(prop)) {
                    prop = prop.replace(re, function () {
                        return arguments[2].toUpperCase();
                    });
                }
                return el.currentStyle[prop] ? el.currentStyle[prop] : null;
            };
            return this;
        };
    }

    screenWidth = window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content');

    // IE8 DEFAULT VALUE
    if (!screenWidth) {
        screenWidth = 'desktop';
    }

    // IE9-10 REMOVE QUOTE FROM CONTENT STRING
    screenWidth = screenWidth.replace(/["']/g, '');

    if (screenWidth !== window.deviceWidth) {
        window.deviceWidth = screenWidth;
    }

    return screenWidth;
}

