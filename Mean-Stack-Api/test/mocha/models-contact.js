'use strict';

var should = require('should'),
	Contact = require('mongoose').model('Contact');

var contact, 
	contact2,
	contactIDs = [],
	contactsJSON = require('../mocks/contacts.json');

describe('Contact Model', function(){
	it('should start with no contacts', function(done){
		Contact.find({}, function(err, contacts){
			contacts.should.have.length(0);
			done();
		});
	});

	describe('- Required Fields -', function(){
		before(function(){
			contact = new Contact(contactsJSON[2]);
			contact2 = new Contact(require('../mocks/contactsAdd.json'));
		});
		it('should have a name', function(){
			should.exist(contact.name);
			(contact.name).should.be.a.String.and.be.exactly('Lee Ann Roth');
		});
		it('should have a creation date', function(){
			should.exist(contact.date);
			(contact.date).should.be.a.Date;
		});
		it('should not have undefined fields', function(){
			should.not.exist(contact2.wife);
			should.not.exist(contact2.likes);
		});
	});

	describe('- Creating -', function(){
		it('should create without error', function(done){
			Contact.create(contactsJSON[0], function(err, contact){
				should.not.exist(err);
				(contact.nickname).should.be.a.String.and.be.exactly('El');
				Contact.find({}, function(err, contacts){
					should.not.exist(err);
					contacts.should.have.length(1);
					done();
				});
			});
		});
		it('should fail to create an identical contact', function(done){
			Contact.create(contactsJSON[0], function(err, contact){
				should.exist(err);
				done();
			});
		});
	});

	describe('- Finding -', function(){
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
		it('should be able to find all contacts', function(done){
			Contact.find({}, function(err, contacts){
				should.not.exist(err);
				contacts.should.have.length(4);
				done();
			});
		});
		it('should be able to find a contact by _id', function(done){
			Contact.findById(contactIDs[1], function(err, contact){
				should.not.exist(err);
				(contact.name).should.be.a.String.and.be.exactly('Dave Zupon');
				done();
			});
		});
		it('should error if _id cannot be found', function(done){
			Contact.findById('This is not an ID', function(err, contact){
				should.exist(err);
				should.not.exist(contact);
				done();
			});
		});
	});

	describe('- Editing -', function(){
		beforeEach(function(done){
			Contact.findById(contactIDs[1], function(err, editContact){
				if(err) done(err);
				contact = editContact;
				done();
			});
		});
		it('should be able to edit a nickname', function(done){
			contact.nickname = 'Billy Jean';
			contact.save(function(err, updatedContact, changed){
				should.not.exist(err);
				changed.should.be.exactly(1);
				updatedContact.nickname.should.be.exactly('Billy Jean');
				done();
			});
		});
		it('should be able to remove emails', function(done){
			contact.email = [];
			contact.save(function(err, updatedContact, changed){
				should.not.exist(err);
				changed.should.be.exactly(1);
				updatedContact.email.should.have.length(0);
				done();
			});
		});
		it('should not change the creation date', function(done){
			contact.employer = 'Save the Date';
			contact.save(function(err, updatedContact, changed){
				should.not.exist(err);
				changed.should.be.exactly(1);
				updatedContact.date.should.be.exactly(contact.date);
				done();
			});
		});
		it('should not be able to leave the name field blank', function(done){
			contact.name = '';
			contact.save(function(err, updatedContact, changed){
				should.exist(err);
				should.not.exist(updatedContact);
				should.not.exist(changed);
				done();
			});
		});
	});

	describe('- Deleting -', function(){
		it('should delete without error', function(done){
			Contact.remove({ _id: contactIDs[3]}, function(err){
				should.not.exist(err);
				Contact.findById(contactIDs[3], function(err, contact){
					should.not.exist(contact);
					done();
				});
			});
			
		});
		it('should fail to delete a non-existent contact', function(done){
			Contact.remove({ _id: 'Another fake id' }, function(err){
				should.exist(err);
				done();
			});
		});
	});

	after(function(done){
		Contact.remove().exec();
		done();
	});
});