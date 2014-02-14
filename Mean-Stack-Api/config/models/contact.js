'use strict';

var mongoose = require('mongoose'),
	validators = require('../validators.js');

var ContactSchema = new mongoose.Schema({
	
	name: { type: String, required: true },
	nickname: String,

	occupation: String,
	employer: String,
	email: {
		type: String,
		unique: true,
		sparse: true,
		validate: validators.email
	},
	phone: {
			type: String,
			unique: true,
			sparse: true,
			validate: validators.phone
	},
	date: { type: Date, default: Date.now, required: true }
});

/**
 * Virtuals, Validations, Hooks, Methods
 *
 * 
 */


mongoose.model('Contact', ContactSchema);