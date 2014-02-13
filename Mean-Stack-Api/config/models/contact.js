'use strict';

var mongoose = require('mongoose'),
	validators = require('../validators.js');

var ContactSchema = new mongoose.Schema({
	
	name: { type: String, required: true },
	nickname: String,

	ocupation: String,
	employer: String,
	email: [
		{	
			use: { type: String, validate: validators.emailUse },
			address: {
				type: String,
				unique: true,
				validate: validators.email
			},
			_id: false
		}
	],
	phone: [
		{
			use: { type: String, validate: validators.phoneUse },
			number: { type: String, unique: true, validate: validators.phone },
			_id: false
		}
	],
	date: { type: Date, default: Date.now, required: true }
});

/**
 * Virtuals, Validations, Hooks, Methods
 *
 * 
 */


mongoose.model('Contact', ContactSchema);