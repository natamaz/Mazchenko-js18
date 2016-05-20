/**
 * Created by НАФТУСЯ on 20.05.2016.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            option: {
                separator: ';'
            },
            dist: {
                src: ['js/script.js', 'js/template.js'],
                dest: 'js/script.main.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,

                    src: ['css/style.css'],
                    dest: 'css/style.min.css'

                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat','uglify']);


};
