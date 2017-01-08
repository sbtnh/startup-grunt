module.exports = {
    dev: {
        bsFiles: {
            src : [
                '<%= cssDest %>/**/*.css',
                '<%= jsDest %>/**/*.js',
                '<%= basePath %>/**/*.cshtml'
            ]
        },
        options: {
            open: false,
            proxy: 'localhost:<%= port %>',
            watchTask: true
            //tunnel: true
        }
    }
};