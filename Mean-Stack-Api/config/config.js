'use strict';
var path = require('path');


module.exports = function(app){
	process.env.NODE_ENV = process.env.NODE_ENV || 'development';

	app.set('root', path.normalize(__dirname + '/../'));
	app.set('db', process.env.MONGOHQ_URL);
	app.set('port', process.env.PORT || require('../package.json').port);
	app.set('modelsPath', path.normalize(__dirname + '/../config/models'));
	app.set('mocksPath', path.normalize(__dirname + '/../test/mocks'));

	require('./environments/' + process.env.NODE_ENV + '.js')(app);
};

	