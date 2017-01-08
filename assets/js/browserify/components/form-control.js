const cssClass = 'form-group--has-value';

/**
 * Toggle class on click
 */
function toggleClass($input) {
    const action = $input.val() === '' ? 'removeClass' : 'addClass';
    $input.parent()[action](cssClass);
}

/**
 * Initialize event for material design input
 */
function initFormControl($inputs = $('.form-group__control')) {
    // events
    $inputs.on('blur', function () {
        toggleClass($(this));
    });

    // first load
    $inputs.each(function () {
        toggleClass($(this));
    });
}

export {initFormControl };
