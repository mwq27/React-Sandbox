'use strict';

module.exports = function(grunt){

	grunt.config('nodemon', {

		options: {
			env: {
				PORT: process.env.PORT || '<%= pkg.port %>'
			},
			ignore: [
				'node_modules/**/node_modules',
				'grunt/*',
				'test/*',
				'karma.conf.js',
				'.jshintrc',
				'.gitignore',
				'package.json',
				'README.md'
			],
			watchedExtensions: ['js', 'json'],
			callback: function(nodemon){
				// [ 'log', 'start', 'exit', 'restart', 'config:update'] */
				nodemon.on('config:update', function(){
					console.log('No eventListeners defined for Nodemon.');
				});
			}
		},
		dev: {
			script: '<%= pkg.main %>',
			options: {
				nodeArgs: ['--debug'],
				env: {
					NODE_ENV: 'development'
				}
			}
		},
		test: {
			script: '<%= pkg.main %>',
			options: {
				env: {
					NODE_ENV: 'test'
				},
				callback: function(nodemon){
					nodemon.on('config:update', function(){
						var port = 'http://localhost:' + (process.env.PORT || require('../package.json').port);
						require('open')(port);
					});
				}
			}
		}

	});

};