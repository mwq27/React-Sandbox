'use strict';
// Karma config file

module.exports = function(config){

	config.set({
		basepath: '',
		frameworks: ['mocha', 'chai', 'sinon'],
		files: ['test/**/*.js'],
		exclude: [],
		reporters: ['dots'],
		port: 9999,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: false,
		browsers: ['PhantomJS'],
		captureTimeout: 6000,
		singleRun: true
	});

};