module.exports = function(grunt) {

    grunt.initConfig({

        closureBuilder: {
            client_build: {
                closureLibraryPath: '../closure-library',
                root: ['src','../closure-library'],
                inputs: 'src/owntra/game.js',
                output_file: 'static/scripts/owntra.min.js',
                compile: true,
                compiler: '../closure-library/compiler.jar',
                compiler_options: {
                    compilation_level: 'ADVANCED_OPTIMIZATIONS'
                }
            },
            client_debug: {
                closureLibraryPath: '../closure-library',
                root: ['src','../closure-library'],
                inputs: 'src/owntra/game.js',
                output_mode: 'script',
                output_file: 'static/scripts/owntra.js'
            }
        }
        
    });

    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.registerTask('default', 'closureBuilder:client_debug');
    grunt.registerTask('build', 'closureBuilder:client_build');

}