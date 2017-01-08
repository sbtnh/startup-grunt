module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: '<%= jsSrc %>/app.js',
        dest: '<%= jsDest %>'
    },
    options: {
        plugin: [['minifyify', {
            map: 'app.map',
            output: '<%= jsDest %>/app.map'
        }]],
        transform: [
            'babelify',
            ['envify', { NODE_ENV: process.env.NODE_ENV || 'development'}]
        ],
        watch: true,
        browserifyOptions: {
            debug: true
        }
    }
};