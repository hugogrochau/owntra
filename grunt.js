module.exports = function(grunt) {

    grunt.initConfig({

        closureBuilder: {
            client_production: {
                builder: 'bin/closurebuilder.py',
                root: 'src',
                inputs: 'src/game.js',
                output_file: 'static/scripts/owntra.min.js',
                compile: true,
                compiler: 'bin/compiler.jar',
                compiler_options: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS'
                }
            },
            client_development: {
                builder: 'bin/closurebuilder.py',
                root: 'src',
                inputs: 'src/game.js',
                output_mode: 'script',
                output_file: 'static/scripts/owntra.js'
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-closure-tools');
    
    grunt.registerTask('pro', 'closureBuilder:client_production');
    grunt.registerTask('dev', 'closureBuilder:client_development');
    grunt.registerTask('default', 'dev pro');
}
