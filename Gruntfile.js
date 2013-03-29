module.exports = function(grunt) {

  grunt.initConfig({

    closureBuilder: {
      options: {
        closureLibraryPath: 'closure-library',
        compilerFile: 'bin/compiler.jar',
        namespaces: 'owntra.Game'
      },
      client_development: {
        src: ['src', 'closure-library/closure/goog', 'closure-library/third_party/closure/goog'],
        dest: 'static/scripts/owntra.js'
      },
      client_production: {
        options: {
          compile: true,
        },
        src: ['src', 'closure-library/closure/goog', 'closure-library/third_party/closure/goog'],
        dest: 'static/scripts/owntra-min.js'
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
