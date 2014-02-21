'use strict';

module.exports = function(grunt){

	grunt.config('express', {

		options: {
			server: 'app.js',
			port: process.env.PORT || require('../package.json').port,
			hostname: 'localhost'
		},
		test: {
			options: {
				serverreload: false
			}
		}

	});

};