module.exports = {
    options: {
        spawn: false
    },

    //js: {
    //    files: [
    //        '<%= jsSrc %>/**/*.js'
    //    ],
    //    tasks: ['buildJs']
    //},

    sass: {
        files: ['<%= cssDest %>/**/*.scss','public/styleguide/css/**/*.scss'],
        tasks: ['buildCss']
    },

    images: {
        files: [
            '<%= imgSrc %>/**'
        ],
        tasks: [
            'newer:copy',
            'newer:kraken'
        ]
    }
};
