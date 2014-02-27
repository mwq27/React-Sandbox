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
		Contact.find({}, function(err, contacts){
			if(err) return next(err);
			if(!contacts.length) res.jsonp({ results: 'none'});
			else res.jsonp(contacts);
		});
	});

	app.post('/api/contacts', function(req, res, next){
		var contact = new Contact(req.body);
		contact.save(function(err){
			if(err){
				console.log(err);
				res.jsonp(201, err);
//				return next(err);
			}
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

	app.get('/api/s/contacts', function(req, res, next){
		_.each(req.query, function(value, key){
			req.query[key] = new RegExp(value, 'i');
		});
		Contact.find(req.query, function(err, contacts){
			if(err) return next(err);
			else res.jsonp(contacts);
		});
	});
	app.post('/api/s/contacts', function(req, res, next){
		_.each(req.body, function(value, key){
			req.body[key] = new RegExp(value, 'i');
		});
		Contact.find(req.body, function(err, contacts){
			if(err) return next(err);
			else res.jsonp(contacts);
		});
	});
};