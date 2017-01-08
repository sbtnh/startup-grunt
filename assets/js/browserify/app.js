/**
 * Dependencies
 */
import $ from 'jquery';
// set jQuery global
global.$ = global.$ || $;

import { APP_ENV } from './application/constant';
// Clear console in development
if(process.env.NODE_ENV === APP_ENV.DEV) {
    console.clear();
}

import { addCapabilities } from './application/detect';
import * as applicationState from './application/state';
import * as applicationElements from './application/elements';
import { loadComponents } from './components/load';

/**
 * Import views
 */
import home from './views/home';

/**
 * Views : add page views here - @views
 */
const Views = {
    home
};

/**
 * Load the current view
 */
function loadView() {
    const currentView = applicationState.get('currentView');
    const hasViewToLoad = Boolean(currentView && Views[currentView]);

    // load page view
    if (hasViewToLoad) {
        Views[currentView]();
    }
}


/**
 * Application ready
 */
$(() => {
    /**
     * Set application state
     */
    applicationState.set({
        lang: $('html').attr('lang'),
        currentView: $('body').data('view')
    });

    /**
     * Set reusable elements
     */
    applicationElements.set({
        nav: $('[data-nav]'),
        header: $('[data-header]'),
        footer: $('[data-footer]')
    });

    addCapabilities();

    /**
     * Load all components
     */
    loadComponents();
    loadView();
});
