module.exports = function (grunt) {
  require("load-grunt-tasks")(grunt);

  let serverPort = 8080;
  let rewriteModule = require('http-rewrite-middleware');
  let serveStatic = require('serve-static');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist', 'src-es5'],
    babel: {
      dev: {
        expand: true,
        cwd: "src",
        src: ["**/*.js"],
        dest: "src-es5",
        options: {sourceMap: true}
      },
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/app/components', src: '**/*.html', dest: 'dist/components/'},
          {expand: true, cwd: 'src/app/directives', src: '**/*.html', dest: 'dist/directives/'},
          {expand: true, cwd: 'src/images', src: '**/*', dest: 'dist/images/'},
        ],
      },
    },
    browserify: {
      dev: {
        src: ['src-es5/app.js'],
        dest: 'dist/bundle.js',
        options: {
          browserifyOptions: {debug: true},
          transform: [
            [
              "babelify",
              {
                "presets": ["es2015"],
                "plugins": ["add-module-exports"]
              }
            ]
          ],
        },
      },
    },
    htmlbuild: {
      dev: {
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
          scripts: {bundle: ['dist/bundle.js']},
          styles: {bundle: ['dist/css/styles.css']},
        }
      }
    },
    // https://github.com/gruntjs/grunt-contrib-connect
    //   https://stackoverflow.com/questions/16569841/reloading-the-page-gives-wrong-get-request-with-angularjs-html5-mode/17164877#17164877
    connect: {
      server: {
        options: {
          base: 'dist',
          debug: true,
          directory: null,
          keepalive: true,
          livereload: false,
          port: serverPort,
          middleware: function (connect, options, middlewares) {
            // https://github.com/viart/http-rewrite-middleware
            middlewares.push(rewriteModule.getMiddleware([
              // {from: '^/cursos/html$', to: '/cursos/html', redirect: 'temporary'},
              // {from: '^/cursos/css$', to: '/cursos/css', redirect: 'temporary'},
              // {from: '^/cursos/less$', to: '/cursos/less', redirect: 'temporary'},
              // {from: '^/cursos/bootstrap$', to: '/cursos/bootstrap', redirect: 'temporary'},
              // {from: '^/cursos/javascript$', to: '/cursos/javascript', redirect: 'temporary'},
              // {from: '^/cursos/jquery$', to: '/cursos/jquery', redirect: 'temporary'},
              // {from: '^/cursos/angularjs$', to: '/cursos/angularjs', redirect: 'temporary'},
              // {from: '^/cursos/grunt$', to: '/cursos/grunt', redirect: 'temporary'},
              // {from: '^/cursos/postgres$', to: '/cursos/postgres', redirect: 'temporary'},
              // {from: '^/cursos/sails$', to: '/cursos/sails', redirect: 'temporary'},
              {from: '^/.*$', to: '/', redirect: 'permanent'},
            ]));

            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }

            // https://github.com/expressjs/serve-static
            middlewares.push(serveStatic('dist/images/'));

            // var directory = options.directory || options.base[options.base.length - 1];
            // Make directory browse-able.
            // middlewares.push(connect.directory(directory));

            return middlewares;
          },
          onCreateServer: function () {
            grunt.log.writeln(`-----0-- Port and current working directory - CWD: ${serverPort} - ${process.cwd()}`);
          },
          open: {
            target: `http://local.aprendewebdev:${serverPort}`,
            appName: 'lwd',
            "callback": function() {} // called when the app has opened
          }
        }
      }
    },
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
    postcss: {
      options: {
        map: true,
        processors: [require('autoprefixer')]
      },
      dev: {src: 'dist/css/styles.css'}
    },
    watch: {
      src: {files: ['src/**/*.js'], tasks: ['jschanged']},
      html: {files: ['src/**/*.html'], tasks: ['htmlchanged']},
      less: {files: ['src/**/*.less'], tasks: ['lesschanged']},
    }
  });

  grunt.registerTask('serve', ['clean', 'less:dev', 'postcss:dev', 'babel:dev', 'copy', 'browserify:dev', 'htmlbuild:dev', 'connect']);
  grunt.registerTask('jschanged', ['babel:dev', 'browserify:dev', 'htmlbuild:dev']);
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
