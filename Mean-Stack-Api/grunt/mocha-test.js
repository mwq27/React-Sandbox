'use strict';

module.exports = function(grunt){

	grunt.config('mochaTest', {

		options: {
			reporter: 'spec'
		},
		src: ['test/mocha/**/*.js']

	});
	
};