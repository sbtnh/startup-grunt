module.exports = function(grunt) {
    var config = {
        banner: '<%= pkg.name %> - <%= pkg.version %>\n' +
        '<%= pkg.author.name %> - <%= pkg.author.url %>\n' +
        'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>',
        basePath: 'assets',
        cssSrc: '<%= basePath %>/css/scss',
        cssDest: '<%= basePath %>/css',
        imgSrc: '<%= basePath %>/images',
        imgDest: '<%= basePath %>/images',
        jsSrc: '<%= basePath %>/js/browserify',
        jsDest: '<%= basePath %>/js',
        pkg: grunt.file.readJSON('package.json')
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
            scope: 'devDependencies'
        }
    });
};
