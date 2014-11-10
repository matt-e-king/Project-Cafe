module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };


  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: '<%= pkg.repository.url %>',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },

    banner: '/*!\n' +
            ' * CafeApp v<%= pkg.version %>\n' +
            ' * Copyright 2014-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',

    // Task configuration.
    clean: {
      dist: ['dist']
    },

    concat: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>',
        stripBanners: false
      },


      main: {
        src: [
          'bower_components/jquery/dist/jquery.js'
          , 'bower_components/angular/angular.js'
          , 'bower_components/angular-route/angular-route.js'
          , 'bower_components/bootstrap/dist/js/bootstrap.js'
          , 'modules/cafe-modules.js'
          , 'services/cafe-data-handler.js'
          , 'services/cafe-field-definitions.js'
          , 'services/cafe-format-definitions.js'
          , 'services/cafe-list-class.js'
          , 'controllers/cafe-controllers.js'
          , 'directives/cafe-directives.js'
          , 'filters/cafe-filters.js'
        ],
        dest: 'dist/js/main.js'
      }

    },


    //javascript uglifying and minifying
    uglify: {
      options: {
        report: 'min'
      },


      main: {
        options: {
          banner: '<%= banner %>'
        },
        src: '<%= concat.main.dest %>'
        , dest: 'dist/js/main.min.js'
      }

    },


    //converting LESS to CSS and minifying
    less: {

      main: {
        options: {
          strictMath: true,
          outputSourceFiles: true,
        },
        files: {  
          'dist/css/main.css': 'less/main.less'
        }
      },

      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'dist/css/main.min.css': 'dist/css/main.css'
        }
      }
    },


    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'dist/css/main.css',
            'dist/css/main.min.css',
          ]
        }
      }
    },


    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
        files: {
          'dist/css/main.css': 'dist/css/main.css',
        }
      }
    },

    copy: {
      fonts: {
        expand: true,
        cwd: 'bower_components/bootstrap/',
        src: 'fonts/*',
        dest: 'dist/'
      },
      // images: {
      //   expand: true,
      //   src: 'images/*',
      //   dest: 'dist/'
      // },
      // appImage: {
      //   expand: true,
      //   src: 'images/*',
      //   dest: 'app/'
      // },
      // appFonts: {
      //   expand: true,
      //   cwd: 'bower_components/bootstrap/',
      //   src: 'fonts/*',
      //   dest: 'app/'
      // }
    },

    watch: {
    //   src: {
    //     files: '<%= jshint.src.src %>',
    //     tasks: ['jshint:src', 'qunit']
    //   },
    //   test: {
    //     files: '<%= jshint.test.src %>',
    //     tasks: ['jshint:test', 'qunit']
    //   },
      less: {
        files: ['less/*.less'],
        tasks: 'less'
      },
      scripts: {
        files: 'js/*.js',
        tasks: 'dist-js'
      },
    //   mustache_render: {
    //     files: ['templates/pages/**/*.mustache', 'templates/partials/**/*.mustache'],
    //     tasks: ['mustache_render:main']
    //   }
    },

  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less', 'csscomb', 'usebanner']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'dist-js', 'copy']);

  //Custom Build
  grunt.registerTask('build', ['clean', 'dist-css', 'dist-js', 'copy']);

};
