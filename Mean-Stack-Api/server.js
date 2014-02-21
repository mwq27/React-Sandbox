'use strict';

var app = require('./app');

require('http').createServer(app).listen(app.get('port'), function(){
	console.log('Environment setting: ' + app.get('env'));
	console.log('Listening on port ' + app.get('port'));
	console.log('Database connected at url: ' + app.get('db'));
	console.log('Press "Ctrl" + "C" to exit.\n');
});




