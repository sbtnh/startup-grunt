module.exports = {
    options: {
        force: true,
        esnext: true
    },
    files: [
        '<%= jsSrc %>/**/*.js',
        '!<%= jsSrc %>/vendors/**/*.js'
    ]
};