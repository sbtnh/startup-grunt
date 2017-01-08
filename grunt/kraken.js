module.exports = {
    kraken: {
        options: {
            key: '',
            secret: '',
            lossy: true
        },
        files: [{
            expand: true,
            cwd: '<%= imgSrc %>',
            src: ['**/*.{png,jpg,gif,svg}'],
            dest: '<%= imgDest %>'
        }]
    }
};

