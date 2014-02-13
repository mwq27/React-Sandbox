'use strict';

var emailUses = ['home','work','other'],
	phoneUses = ['home','work','mobile','main','home fax','work fax','pager'];

module.exports = {

	email: [
		function(val){ return /^.+@.+\..+$/.test(val); },
		'Email does not appear to be valid.'
	],
	emailUse: [
		function(val){ return emailUses.indexOf(val) >= 0; },
		'Selected option is not a valid use for email.'
	],
	phone: [
		// TODO - validation method for phone?
		function(val){ return val === val; },
		'Phone does not appear to be valid.'
	],
	phoneUse: [
		function(val){ return phoneUses.indexOf(val) >= 0; },
		'Selected option is not a valid use for phone.'
	]
};