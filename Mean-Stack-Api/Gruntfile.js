'use strict';

module.exports = function(grunt){
	
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: require('./package.json')
	});

	grunt.loadTasks('grunt');



	grunt.registerTask('default', [
		'jshint',
		'concurrent:dev'
	]);
	grunt.registerTask('test',[
		'env:test',
		'express:test',
		'mochaTest'
	]);

};