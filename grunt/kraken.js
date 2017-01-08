module.exports = {
    kraken: {
        options: {
            key: '40240f394855b2c5a5a8ea50351c5d01',
            secret: 'dd145206068e8cd53b5eceff09890e06c9a9e0d8',
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

