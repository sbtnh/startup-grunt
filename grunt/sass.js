module.exports = {
    options: {
        sourceMap: true
    },
    dist: {
        files: {
            '<%= cssDest %>/site.css': '<%= cssSrc %>/site.scss'
        }
    }
};
