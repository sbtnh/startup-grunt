// Config
// https://github.com/csscomb/csscomb.js/blob/master/config/yandex.json
module.exports = {
    options: {
        config: 'config.csscomb.json'
    },
    dynamic_mappings: {
        expand: true,
        cwd: '<%= cssSrc %>',
        src: ['**/*.scss', '!vendors/**/*.scss'],
        dest: '<%= cssSrc %>'
    }
};