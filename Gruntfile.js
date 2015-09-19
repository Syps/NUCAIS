module.exports = function(grunt) {

  grunt.initConfig({
    //pkg: grunt.file.readJSON('package.json')

    // check all js files for errors
    jshint: {
      all: ['public/src/js/**/*.js']
    },

    // minify all js files into app.min.js
    uglify: {
      build: {
        files: {
          'public/dist/js/app.min.js':
            ['public/src/js/**/*.js', 'public/src/js/*.js']
        }
      }
    },

    // configure mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          //captureFile: 'testResults.txt',
          quiet: false, // default
          clearRequireCache: false // default
        },
        src: ['tests/**/*.js']
      }
    },


    // configure nodemon to watch for changes to index.js
    nodemon: {
      dev: {
        script: 'index.js'
      }
    }

  });

  // load tasks
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // register the nodemon task when run grunt
  grunt.registerTask('default', ['mochaTest', 'nodemon']);

};
