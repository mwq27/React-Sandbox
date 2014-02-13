'use strict';

var Contact = require('mongoose').model('Contact'),
	_ = require('lodash');

module.exports = function(app){

	app.param('contactID', function(req, res, next, id){
		Contact.findById(id, function(err, contact){
			if(err) return next(err);
			if(!contact) {
				res.send(404, 'Could not find a contact with ID: ' + id);
			} else {
				req.contact = contact;
				next();	
			}
			
		});
	});

	app.get('/api/contacts', function(req, res, next){
		Contact.find().exec(function(err, contacts){
			if(err) return next(err);
			if(!contacts.length) res.send(404, 'You queried, but there were no contacts in the database.');
//			res.jsonp(contacts);
		});
	});

	app.post('/api/contacts', function(req, res, next){
		var contact = new Contact(req.body);
		contact.save(function(err){
			if(err) return next(err);
			res.jsonp(201, contact);
		});
		
	});
	
	app.get('/api/contacts/:contactID', function(req, res){
		res.jsonp(req.contact);
	});

	app.put('/api/contacts/:contactID', function(req, res, next){
		var contact = _.extend(req.contact, req.body);
		contact.save(function(err){
			if (err) return next(err);
			res.send(204);
		});
	});

	app.del('/api/contacts/:contactID', function(req, res, next){
		var contact = req.contact;
		contact.remove(function(err){
			if (err) return next(err);
			res.send(204);
		});
	});
};