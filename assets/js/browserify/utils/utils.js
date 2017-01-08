/**
 * Check if environment is localhost
 */
function isLocal() {
    return window.location.href.indexOf('localhost') !== -1;
}

/**
 * Disable in production mode
 */
const log = {
    log: function log() {
        if (isLocal()) {
            console.log.apply(console, arguments);
        }
    },
    time: function time() {
        if (isLocal()) {
            console.time.apply(console, arguments);
        }
    },
    timeEnd: function time() {
        if (isLocal()) {
            console.timeEnd.apply(console, arguments);
        }
    }
};

/**
 * Get device user agent
 */
const userAgent = {
    isiOS : function() {
        return /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
    },
    isAndroid : function() {
        return /android/i.test(navigator.userAgent.toLowerCase());
    },
    isWindowsPhone : function() {
        return /IEMobile/i.test(navigator.userAgent.toLowerCase());
    },
    isDevice : function() {
        return this.isiOS() || this.isAndroid() || this.isWindowsPhone();
    },
    isMac : function() {
        return navigator.userAgent.indexOf('Mac OS X');
    }
};

export {isLocal, log, userAgent};
