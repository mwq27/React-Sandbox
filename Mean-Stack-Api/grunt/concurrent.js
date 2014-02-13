'use strict';

module.exports = function(grunt){

	grunt.config('concurrent', {

		options: {
			logConcurrentOutput: true
		},
		dev: [
			'nodemon:dev',
			'watch'
		]

	});

};