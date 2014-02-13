'use strict';

module.exports = function(app){
	app.get('/', function(req, res){
		res.send(400, 'This is the index page! Neat-oh.');
	});
};