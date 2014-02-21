'use strict';

module.exports = function(grunt){

	grunt.config('open', {

		options: {
			delay: 1000
		},
		all: { 
			path: function(){
				var path = 'http://localhost:' + process.env.PORT;
				return path;
			},
			app: 'Google Chrome'
		}

	});

};