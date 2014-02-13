'use strict';

module.exports = function(grunt){

	grunt.config('watch', {

		options: {},
		js: {
			files: [
				'config/**/*.js',
				'grunt/**/*.js',
				'routes/**/*.js',
				'Gruntfile.js'
			],
			tasks: ['newer:jshint:all']
		}

	});

};