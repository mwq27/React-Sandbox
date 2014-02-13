'use strict';

var mongoose = require('mongoose'),
	fs = require('fs'),
	_ = require('underscore'),
	db, connection;

module.exports = function(app){

	db = mongoose.connect("mongodb://mwq27:sandbox@troup.mongohq.com:10005/development");
	connection = mongoose.connection;

	var walk = function(path) {
		fs.readdirSync(path).forEach(function(file) {
			var newPath = path + '/' + file;
			var stat = fs.statSync(newPath);
			if(stat.isFile()) {
				if(/(.*)\.(js$|coffee$)/.test(file)) {
					require(newPath);
				}
			} else if(stat.isDirectory()) {
				walk(newPath);
			}
		});
	};
	
	walk(app.get('modelsPath'));

	connection.on('error', console.error.bind(console, 'MongoDB Connection Error: '));
	connection.once('open', function(){
		//console.log('MongoDB Connection Successful.');
	});

	return db;
};