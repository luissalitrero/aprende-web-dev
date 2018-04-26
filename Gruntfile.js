module.exports = function (grunt) {
  let serverPort = 8080;
  let baseDirectory = 'dist';

  require("load-grunt-tasks")(grunt);

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
        }
      }
    },
    connect: {
      server: {
        options: {
          base: baseDirectory,
          debug: true,
          directory: null,
          keepalive: true,
          livereload: false,
          port: serverPort,
          middleware: function (connect, options, middlewares) {
            middlewares.unshift(function (req, res, next) {
              if (req.url !== '/hello/world') { return next(); }

              res.end(`Hello, world from port # ${options.port} !`);
            });

            return middlewares;
          },
          "onCreateServer": function () {
            grunt.log.writeln(`-----0-- Port and current working directory - CWD: ${serverPort} - ${process.cwd()}`);
          },
          open: {
            target: `http://local.aprendewebdev:${serverPort}`,
            appName: 'open',
            "callback": function() {} // called when the app has opened 
          }
        }
      }
    },
    watch: {
      src: {
        files: ['src/**/*.js'],
        tasks: ['jschanged'],
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['htmlchanged'],
      },
    }
  });

  grunt.registerTask('serve', ['clean', 'babel:dev', 'copy', 'browserify:dev', 'htmlbuild:dev', 'connect']);
  grunt.registerTask('jschanged', ['babel:dev', 'browserify:dev', 'htmlbuild:dev']);
  grunt.registerTask('htmlchanged', ['htmlbuild:dev']);
  grunt.registerTask('watchFiles', ['watch']);

  grunt.event.on('watch', function (action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
};

// Create a concatenated file with libraries and use them as globals to avoid having to be importing them every time
// https://github.com/viart/http-rewrite-middleware
// https://stackoverflow.com/questions/16569841/reloading-the-page-gives-wrong-get-request-with-angularjs-html5-mode/17164877#17164877

// https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
// https://www.sitepoint.com/setting-up-es6-project-using-babel-browserify/
// https://www.npmjs.com/package/babel-plugin-transform-imports
// https://thinkster.io/angularjs-es6-tutorial
// http://browserify.org
// https://github.com/browserify/browserify#usage
// https://github.com/browserify/browserify-handbook#development
// https://www.npmjs.com/package/grunt-browserify
// https://github.com/jmreidy/grunt-browserify
// https://github.com/browserify/browserify
// https://docs.npmjs.com/files/package.json
// https://www.npmjs.com/package/mustache
// https://www.npmjs.com/search?q=grunt+mustache
// https://mozilla.github.io/nunjucks/
// https://github.com/pugjs/pug
// https://www.npmjs.com/package/grunt-contrib-watch
// https://www.youtube.com/watch?v=4FE-3jkD0Ag&t=29m05s
// https://www.npmjs.com/package/babel-preset-es2015
// https://babeljs.io/docs/plugins/
// https://github.com/59naga/babel-plugin-add-module-exports
