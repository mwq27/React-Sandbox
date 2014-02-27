"use strict";
var jwt = require("jsonwebtoken");
var secret = "1111111111";
module.exports = function(app){
	app.post('/authenticate', function (req, res) {
		//TODO validate req.body.username and req.body.password
		//if is invalid, return 401
		var profile;
		var token;
		if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
			res.send(401, 'Wrong user or password');
			return;
		}

		profile = {
			first_name: 'John',
			last_name: 'Doe',
			email: 'john@doe.com',
			id: 123
		};


		// We are sending the profile inside the token
		token = jwt.sign(profile, secret, { expiresInMinutes: 60 * 5 });


		res.jsonp({ token: token });
	});
};