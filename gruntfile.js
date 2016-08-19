module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        //src: ['lib/**/*.js'],
        src: ['lib/*.js'],
        //dest: 'dist/<%= pkg.name %>.js'
        dest: 'js/script.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'js/script.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }    
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};