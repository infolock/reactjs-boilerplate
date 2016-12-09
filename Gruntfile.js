module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var shrinkWrap = grunt.file.readJSON('npm-shrinkwrap.json');
    var pkg = grunt.file.readJSON('package.json');

    var deps = [];

    for(var p in shrinkWrap.dependencies){
        deps.push({
            expand: true,
            cwd: './node_modules/' + p,
            src: ['**/*'],
            dest: './package/node_modules/' + p
        });
    }

    grunt.initConfig({
        pkg: pkg,
        env: {
            grunt: {
                NODE_ENV: 'grunt'
            }
        },
        clean: {
          package: {
            src: ['./package']
          }
        },
        copy: {
          all: {
            files: [
                  { expand: true,  cwd: './public/',  src: ['**/*'], dest: './package/public/' },
                  { expand: true,  cwd: './config/',  src: ['**/*'], dest: './package/config/' },
                  { expand: true,  cwd: './views/',  src: ['**/*'], dest: './package/views/' },
                  { expand: false, src: ['./server.js'], dest: './package/server.js' },
                  { expand: false, src: ['./package.json'], dest: './package/package.json' }
              ].concat(deps)
          }
        },
        compress : {
            main : {
                options: {
                    mode: 'zip',
                    archive: function() {
                        var pkgJson = grunt.config.get('pkg');
                        return pkgJson.name + '-' + pkgJson.version + '.zip';
                    }
                },
                files : [
                    { expand: true, src : ['**'], cwd : './package/' }
                ]
            },
        },
        critical: {
          test: {
            options: {
                base: './public/',
                css: [
                    'public/css/main.css'
                ],
                width: 2880,
                height: 2880,
                minify: true,
                // extract: true
            },
            src: 'views/critical.html',
            dest: 'views/critical.css'
        }
      },
      shell: {}
    });

    grunt.registerTask('webpack', 'Runs webpack', function (which) {
        var done = this.async();
        var webpack = require('webpack');
        var config = require('./buildconfigs/' + which + '.config');

        webpack(config, function (err, stats) {
            if (stats.compilation.errors.length) {
                var messages = ['\n'];

                stats.compilation.errors.forEach(function(error) {
                    if(messages.indexOf(error.message) === -1) {
                        messages.push(error.message);
                    }
                });

                grunt.fail.warn(messages.join('\n'));
            } else {
                done();
            }
        });
    });

    grunt.registerTask('default', [
      'env:grunt',
      'webpack:dev'
    ]);

    grunt.registerTask('build', [
      'webpack:production',
      'copy:all',
      'compress:main',
      'clean:package'
    ]);
};
