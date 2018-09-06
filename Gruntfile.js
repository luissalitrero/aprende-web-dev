module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  // let serverPort = 8080;
  let htmlbuildOpts = {
    src: 'src/index.html',
    dest: 'dist/index.html',
    options: {
      // EOL: 'autodectect',
      allowUnknownTags: true,
      basePath: false,
      beautify: true,
      keepTags: true,
      logOptions: true,
      parseTag: 'build',
      // prefix: '//some-cdn',
      processFiles: false,
      relative: true,
      replace: false,
      suffix: new Date().getTime(),
      data: {version: "0.1.0"}, // Data to pass to templates
      // scripts: {bundle: ['dist/bundle.js']},
      styles: {bundle: ['dist/css/styles.css']},
    }
  };
  let htmlbuildOptsDev = JSON.parse(JSON.stringify(htmlbuildOpts));
  let htmlbuildOptsProd = JSON.parse(JSON.stringify(htmlbuildOpts));
  htmlbuildOptsDev.options.scripts = {bundle: ['dist/bundle.annotated.js']};
  htmlbuildOptsProd.options.scripts = {bundle: ['dist/bundle.min.js']};

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // https://www.npmjs.com/package/grunt-contrib-clean
    clean: ['dist', 'src-es5'],
    // https://www.npmjs.com/package/grunt-contrib-less
    less: {
      dev: {
        options: {
          compress: false,
          strictImports: true,
          strictMath: false,
          strictUnits: false,
          // dumpLineNumbers: 'all',
          sourceMap: true,
        },
        files: {'dist/css/styles.css': 'src/less/main.less'},
      },
    },
    // https://www.npmjs.com/package/grunt-postcss
    postcss: {
      options: {
        map: true,
        processors: [require('autoprefixer')]
      },
      dev: {src: 'dist/css/styles.css'}
    },
    // https://www.npmjs.com/package/grunt-babel
    // https://www.npmjs.com/package/babel-core
    babel: {
      dev: {
        expand: true,
        cwd: "src",
        src: ["**/*.js"],
        dest: "src-es5",
        options: {
          sourceMap: true,
          "plugins": []
        },
      },
    },
    // https://www.npmjs.com/package/grunt-contrib-copy
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/app/components', src: '**/*.html', dest: 'dist/components/'},
          {expand: true, cwd: 'src/app/directives', src: '**/*.html', dest: 'dist/directives/'},
          {expand: true, cwd: 'src/static/images', src: '**/*', dest: 'dist/static/images/'},
          {expand: true, cwd: 'src/static/css', src: '**/*', dest: 'dist/static/css/'},
          {expand: true, cwd: 'src/static/fontawesome', src: '**/*', dest: 'dist/static/fontawesome/'},
          {expand: true, cwd: 'src/static/js', src: '**/*', dest: 'dist/static/js/'},
        ],
      },
    },
    // https://www.npmjs.com/package/grunt-browserify
    browserify: {
      dev: {
        src: ['src-es5/app.js'],
        dest: 'dist/bundle.js',
        options: {
          browserifyOptions: {debug: true},
          transform: [
            [
              // https://www.npmjs.com/package/babelify
              "babelify",
              {
                // https://www.npmjs.com/package/babel-preset-es2015
                // https://www.npmjs.com/package/babel-plugin-add-module-exports
                "presets": ["es2015"],
                "plugins": [
                  "add-module-exports",
                  "transform-class-properties",
                  ["angularjs-annotate", { "explicitOnly" : true}]
                ]
              }
            ]
          ],
        },
      },
    },
    // https://www.npmjs.com/package/grunt-ng-annotate
    // https://github.com/schmod/babel-plugin-angularjs-annotate
    ngAnnotate: {
      options: {separator: ';'},
      dev: {
        files: {'dist/bundle.annotated.js': ['dist/bundle.js']},
      },
    },
    // https://github.com/gruntjs/grunt-contrib-uglify
    uglify: {
      dev: {
        files: {'dist/bundle.min.js': ['dist/bundle.annotated.js']}
      }
    },
    // https://www.npmjs.com/package/grunt-html-build
    htmlbuild: {
      dev: htmlbuildOptsDev,
      prod: htmlbuildOptsProd
    },
    // https://browsersync.io/docs/options
    browserSync: {
      dev: {
        bsFiles: {
          src : ['dist/static/css/*.css', 'dist/static/images/*.*']
        },
        options: {
          single: true,
          server: {baseDir: "dist"}
        }
      }
    },
    // https://www.npmjs.com/package/grunt-contrib-watch
    watch: {
      src: {files: ['src/**/*.js'], tasks: ['jschanged']},
      html: {files: ['src/**/*.html'], tasks: ['htmlchanged']},
      less: {files: ['src/**/*.less'], tasks: ['lesschanged']},
    },
  });

  // grunt.registerTask('serve', ['clean', 'less:dev', 'postcss:dev', 'babel:dev', 'copy', 'browserify:dev', 'htmlbuild:dev', 'connect']);
  grunt.registerTask('serve:dev', ['clean', 'less:dev', 'postcss:dev', 'babel:dev', 'copy', 'browserify:dev', 'ngAnnotate:dev', 'htmlbuild:dev', 'browserSync']);
  grunt.registerTask('serve:prod', ['clean', 'less:dev', 'postcss:dev', 'babel:dev', 'copy', 'browserify:dev', 'ngAnnotate:dev', 'uglify:dev', 'htmlbuild:prod', 'browserSync']);
  grunt.registerTask('jschanged', ['babel:dev', 'copy', 'browserify:dev', 'ngAnnotate:dev', 'browserify:dev', 'htmlbuild:dev']);
  grunt.registerTask('htmlchanged', ['copy', 'htmlbuild:dev']);
  grunt.registerTask('lesschanged', ['less:dev', 'postcss:dev']);
  grunt.registerTask('watchFiles', ['watch']);

  grunt.event.on('watch', function (action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
};

// https://www.npmjs.com/package/browserify-ng-html2js
// http://nicholasjohnson.com/blog/building-angular-with-browserify/
// Create a concatenated file with libraries and use them as globals to avoid having to be importing them every time
// https://www.youtube.com/watch?v=4FE-3jkD0Ag&t=29m05s  <-- Building ES6 Browser Apps w/ Grunt and Babel

// https://www.npmjs.com/package/babel-plugin-transform-imports
// https://thinkster.io/angularjs-es6-tutorial
// https://www.npmjs.com/package/mustache  <-- Logic-less {{mustache}} templates with JavaScript.
// https://www.npmjs.com/package/grunt-mustache-generate  <-- generate html pages and partials for reuse client side.
// https://mozilla.github.io/nunjucks/  <-- templating engine for JavaScript.
// https://github.com/pugjs/pug  <-- Pug is a high-performance template engine.
// http://astronautweb.co/snippet/font-awesome/
// https://material.io/tools/icons/?style=baseline


    // https://github.com/gruntjs/grunt-contrib-connect  -- https://stackoverflow.com/questions/16569841/reloading-the-page-gives-wrong-get-request-with-angularjs-html5-mode/17164877#17164877
    // connect: {
    //   server: {
    //     options: {
    //       base: 'dist',
    //       debug: true,
    //       directory: null,
    //       keepalive: true,
    //       livereload: false,
    //       port: serverPort,
    //       middleware: function (connect, options, middlewares) {
    //         // https://github.com/viart/http-rewrite-middleware
    //         middlewares.push(modRewrite.getMiddleware([
    //           // {from: '^/cursos/html$', to: '/index.html', redirect: 'permanent'},
    //           // {from: '^/cursos/css$', to: '/cursos/css', redirect: 'temporary'},
    //           {from: '^/.*$', to: '/index.html', redirect: 'permanent'},                      // https://www.youtube.com/watch?v=XiVtu58xVJY
    //           // {from: '^/(.*)$', to: '/#/$1', redirect: 'permanent'},
    //         ], {verbose: true}));

    //         !Array.isArray(options.base) && (options.base = [options.base]);

    //         // https://github.com/expressjs/serve-static
    //         middlewares.push(serveStatic('dist/static/css/'));
    //         middlewares.push(serveStatic('dist/static/images/'));

    //         // var directory = options.directory || options.base[options.base.length - 1];
    //         // Make directory browse-able.
    //         // middlewares.push(connect.directory(directory));

    //         return middlewares;
    //       },
    //       onCreateServer: function () {
    //         grunt.log.writeln(`-----0-- Port and current working directory - CWD: ${serverPort} - ${process.cwd()}`);
    //       },
    //       open: {
    //         target: `http://local.aprendewebdev:${serverPort}`,
    //         appName: 'lwd',
    //         "callback": function() {} // called when the app has opened
    //       }
    //     }
    //   }
    // }
