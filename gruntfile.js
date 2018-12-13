// npm install --save-dev grunt-contrib-sass grunt-html-build

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    author: 'Daniel Marcano',
    sass: {
      dist: {
        files: {
          "buildTest/css/<%= pkg.name %>.css" : "app/scss/**/*.scss"
        }
      }
    },
    htmlbuild: {
      dist: {
        src: './app/index.html',
        dest: './buildTest/',
        options: {
          beautify: true,
          relative: true,
          basePath: false,
          sections: {
            layout: {
              header: './app/header.html'
            }
          },
        }
      }
    },
    watch: {
      html: {
        files: ['./app/**/*.html'],
        tasks: ['htmlbuild']
      },
      css: {
        files: './app/scss/**/*.scss',
        tasks: ['sass'],
      },
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'buildTest/css/*.css',
            'buildTest/js/*.js',
            'buildTest/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './buildTest'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-sass'); // So that Grunt knows the plugin is there

  grunt.registerTask('default', ['browserSync', 'watch']);
};
