// Karma configuration
// Generated on Sun Jan 26 2014 11:23:37 GMT-0600 (CST)

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: '../',


		// frameworks to use
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/bower_components/angular-route/angular-route.js',
			'app/bower_components/underscore/underscore.js',
			'app/bower_components/react/react.js',
			'app/bower_components/ngReact/ngReact.js',
			'app/scripts/**/*.js',
			'app/scripts/**/tests/*.js'
		],


		// list of files to exclude
		exclude: [

		],


		// test results reporter to use
		// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_DEBUG,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: true
	});
};
