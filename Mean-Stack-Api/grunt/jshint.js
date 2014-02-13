'use strict';

module.exports = function(grunt){

	grunt.config('jshint', {

		options: {
			jshintrc: '.jshintrc',
			report: 'jslint'
		},
		all: {
			src: [
				'config/**/*.js', 
				'grunt/**/*.js', 
				'routes/**/*.js',
				//'test/**/*.js',
				'app.js',
				'server.js',
				'Gruntfile.js'
			]
		} 
		
	});

};