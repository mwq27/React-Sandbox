'use strict';

var app = require('../../app'),
	request = require('supertest')(app),
	should = require('should'),
	Contact = require('mongoose').model('Contact');
	
var testUrl,
	mockContact,
	contactIDs = [],
	contactsJSON = require('../mocks/contacts.json');

describe('Contact Routing', function(){
	before(function(done){
		Contact.remove().exec();
		contactsJSON.forEach(function(contact){
			Contact.create(contact, function(err, contact){
				if(err) done(err);
				contactIDs.push(contact._id);
			});
		});
		done();
	});

	describe('- Get All -', function(){
		it('should respond with json', function(done){
			request.get('/api/contacts')
				.expect('Content-Type', /json/)
				.expect(200)
				.expect(function(res){
					(res.body).should.be.a.Array; })
				.end(done);
		});//200
	});

	describe('- Get One -', function(){
		before(function(){
			testUrl = '/api/contacts/' + contactIDs[0];
		});
		it('should respond with json', function(done){
			request.get(testUrl)
				.expect('Content-Type', /json/)
				.expect(200)
				.expect(function(res){
					(res.body).should.be.a.Object; })
				.end(done);
		});//200
		it('should err on fake Id', function(done){
			request.get('/api/contacts/fakeIdHere')
				.expect(500, done);
				//500 because a non-24 character hash throws an ID error in Mongoose
		});
		it('should err on incorrect id', function(done){
			if(contactIDs.indexOf('41224d776a326fb40f000001') < 0 ){
				request.get('/api/contacts/41224d776a326fb40f000001')
					.expect(404, done);
			} else {
				done();
			}
		});
	});

	describe('- Post -', function(){
		before(function(){
			mockContact = require('../mocks/ContactsAdd.json');
		});
		it('should respond with json', function(done){
			request.post('/api/contacts')
				.send(mockContact)
				.expect(201)
				.expect(function(res){
					(res.body).should.be.a.Object;
					(res.body.name).should.be.exactly(mockContact.name); })
				.end(done);
		});//201
		it('should err on empty required fields', function(done){
			mockContact.name = '';
			request.post('api/contacts')
				.send(mockContact)
				.expect(403, done);
		});//403
		it('should err on duplicate unique value(email)', function(done){
			mockContact = require('../mocks/contacts.json')[1];
			request.post('/api/contacts')
				.send(mockContact)
				.expect(500, done);
		});//403
	});

	describe('- Put -', function(){
		before(function(){
			testUrl = '/api/contacts/' + contactIDs[1];
		});
		it('should respond without json', function(done){
			request.put(testUrl)
				.send({ name: 'Theseus Difference', employer: 'Brand New Enterprises'})
				.expect(204, done);
		});//204
		it('should err on empty required fields', function(done){
			request.put(testUrl)
				.send({ name: '' })
				.expect(500, done);
		});//500
	});

	describe('- Delete -', function(){
		before(function(){
			testUrl = '/api/contacts/' + contactIDs[3];
		});
		it('should respond without json', function(done){
			request.del(testUrl)
				.expect(204, done);
		});//204
		it('should err on cannot be found', function(done){
			request.del(testUrl)
				.expect(404, done);
		});//404
	});

	after(function(done){
		Contact.remove().exec();
		done();
	});
});