module.exports = function(grunt) {

    grunt.initConfig({

        closureBuilder: {
            client_production: {
                closureLibraryPath: 'closure-library',      
                root: ['src', 'closure-library/closure/goog', 'closure-library/third_party/closure/goog'],
                inputs: 'src/game.js',
                output_file: 'static/scripts/owntra.min.js',
                compile: true,
                compiler: 'bin/compiler.jar',
                compiler_options: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    jscomp_warning: 'visibility', // Give warnings when accessing private or protected members
                    process_closure_primitives: true // (goog.provide, goog.import, etc)
                }
            },
            client_development: {
                closureLibraryPath: 'closure-library',      
                root: ['src', 'closure-library/closure/goog', 'closure-library/third_party/closure/goog'],
                inputs: 'src/game.js',
                output_mode: 'script',
                output_file: 'static/scripts/owntra.js'
            }
        },

        stylus: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    'static/styles/main.css': 'styles/main.styl'
                }
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    grunt.registerTask('pro', 'closureBuilder:client_production');
    grunt.registerTask('dev', 'closureBuilder:client_development');
    grunt.registerTask('styles', 'stylus:compile');
    grunt.registerTask('default', 'styles dev pro');
}
