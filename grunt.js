module.exports = function(grunt) {

    grunt.initConfig({

        concat: {
            dist: {
                src: [
                    'build/ecore.edit.start',
                    'src/ecore.edit.js',
                    'src/ui/window/Window.js',
                    'src/ui/menu/Menus.js',
                    'src/ui/property/Value.js',
                    'src/ui/property/Row.js',
                    'src/ui/property/Property.js',
                    'src/ui/tabs/Tab.js',
                    'src/ui/tree/Node.js',
                    'src/ui/tree/Tree.js',
                    'src/ui/editor/Editor.js',
                    'src/ui/tabs/TabPanel.js',
                    'build/ecore.edit.end'
                ],
                dest: 'dist/ecore.edit.js'
            }
        },

        less: {
            development: {
                options: {
                    compress: true
                },
                files: { 'dist/css/ecore.edit.css': 'src/ui/**/*.less' }
            }
        },

        lint: {
            all: ['grunt.js', 'dist/ecore.edit.js']
        },

        jshint: {
            options: {
                browser: true
            }
        },

        min: {
            dist: {
                src: ['dist/ecore.edit.js'],
                dest: 'dist/ecore.edit.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('build', 'concat less min');

};
