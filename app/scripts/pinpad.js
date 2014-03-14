(function($) {
	$.fn.pinpad = function(options) {

		String.prototype.replaceAt = function(index, character) {
			return this.substr(0, index) + character + this.substr(index + character.length);
		}
		// Do your awesome plugin stuff here
		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			'formatter': 'SSN',
			'characterType': 'numeric',
			obfuscationChar: '*',
			newCharHangTime: 500,
			$readout: this,
			enableObfuscation: true,
			stringValidator: "validSSN",
			maxLength: 9,
			buttonClass: '',
			textChange: function() {}

		}, options);

		var pinpad = {};

		pinpad.val = [];
		pinpad.timeouts = [];
		return this.each(function() {
			$(settings.buttonClass).bind('tap', function(e) { // binding for buttons
				e.preventDefault();
				if ($(this).hasClass('delete')) {
					handleKey('del');
				} else if ($(this).hasClass('clear')) {
					handleKey('clr');
				} else {
					handleKey($(this).data("number"));
				}
			});

			// Tooltip plugin code here
			var validNumeric = (function(char) {
				// if char is a digit, then return true
				return (/\d/g).test(char);
			});

			pinpad.validPIN = (function(char) {
				// check for a string of between 4 and 8 digits
				return (/\d{4,8}/g).test(pinpad.val.join(''));
			});

			this.validPIN = pinpad.validPIN;

			var validPhoneUSA = (function() {
				// do basic validation on phone number
				// first digit must be > 1
				// fourth digit must be > 1
				// total of 10 digits
				return (/[2-9]\d\d[2-9]\d{6}/g).test(pinpad.val.join(''));
			});

			pinpad.validSSN = (function() {
				// super basic check of ssn -- check that it's 9 digits
				return (/\d{9}/g).test(pinpad.val.join(''));
			});

			this.validSSN = pinpad.validSSN;

			var formatPIN = (function() {
				// returns the pinpad value in PIN format (no special formatting)
				return pinpad.val.join('');
			});

			var formatSSN = (function() {
				// returns the pinpad value as a formatted SSN: 123-45-6789
				return _stringPreformat([' ', ' ', ' ', '-', ' ', ' ', '-', ' ', ' ', ' ', ' '], [3, 6]);
			});

			var formatPhoneUSA = (function() {
				// returns the pinpad value as a formatted US phone number with area code: (123) 454-6789
				return _stringPreformat(['(', ' ', ' ', ' ', ')', ' ', ' ', ' ', ' ', '-', ' ', ' ', ' ', ' '], [0, 4, 5, 9]);
			});

			var _stringPreformat = (function(formatString, skipPositions) {
				// returns the pinpad value as a formatted string
				// formatString is an array of characters representing a preformatted string
				// skipPositions is an array of positions in formatString that should be skipped over when adding values from pinpad.val
				var i = 0; // index into the formatString array
				var j = 0; // index into pinpad.val array
				var formattedString = [];
				while (i < formatString.length) { // loop through the empty formatString AND the pinpad val together
					if (j > pinpad.val.length - 1) { // if there are no more pinpad chars to examine, we're done
						break;
					}

					if (skipPositions.indexOf(i) === -1) { // skip phone array positions that don't hold digits
						formatString[i] = pinpad.val[j++]; // add digit from pinpad val into phone array
					}
					formattedString.push(formatString[i]); // add user input and format characters as user types
					i++;
				}
				return formattedString.join(''); // return the formatted array as a string
			});

			var format = (function() {
				// call user formatter function
				switch (settings.formatter) {
					case "SSN":
						return formatSSN();
						break;

					case "Phone":
						return formatPhoneUSA();
						break;

					case "PIN":
						return formatPIN();
						break;
				}
			});

			var charValidator = (function(char) {
				switch (settings.formatter) {
					case "SSN":
						return validNumeric(char);
						break;

					case "Phone":
						return validPhoneUSA(char);
						break;

					case "PIN":
						return validNumeric(char);
						break;
				}
			})

			pinpad.isValid = (function() {
				// call user string validation function
				return stringValidator();
			});

			this.isValid = pinpad.isValid;

			var isValidChar = (function(char) {
				// call user character validation function
				return charValidator(char);
			});

			var getObfuscated = (function() {
				// return the pinpad value with letters and numbers 
				return format().replace(/\w/g, settings.obfuscationChar);
			});

			var _clearTimeouts = (function() {
				// internal function to clear the timeout queue 
				$(pinpad.timeouts).each(function() {
					clearTimeout(this);
				});
			});

			var clearReadout = (function() {
				// clear the pinpad readout
				pinpad.val = [];
				updateReadout();
			});

			this.clear = (function() {
				clearReadout();
			});

			var pushChar = (function(char) {
				// add a character to the pinpad value and update the readout
				if (pinpad.val.length < settings.maxLength && isValidChar(char)) { // only if it's valid and we're not at maxLength
					pinpad.val.push(char);
					updateReadout("push");
				}
			});

			var popChar = (function() {
				// remove a character from the end of the pinpad and update the readout
				pinpad.val.pop();
				updateReadout("pop");
			});

			this.get = (function() {
				// return the pinpad's value as an unformatted string
				return pinpad.val.join('');
			});

			pinpad.isEmpty = (function() {
				// return the pinpad's value as an unformatted string
				return pinpad.val.length == 0;
			});

			var handleKey = (function(key) {
				// handle input on the pinpad; key is either a character or "del" or "clr"
				if (key == "clr") {
					clearReadout();
				} else if (key == "del") {
					popChar();
				} else {
					pushChar(key);
				}
			});

			var updateReadout = (function(what) {
				// update the pinpad's readout
				var formattedText;
				if (settings.enableObfuscation) { // we want to obfuscate the readout
					formattedText = getObfuscated(); // get the obfuscated pinpad value
					if (what == "push") { // if we're adding a character, temporarily display that last character before obfuscating it
						formattedText = formattedText.replaceAt(formattedText.lastIndexOf(settings.obfuscationChar), pinpad.val.slice(-1)); // replace last * with last character in value	
					}

					_clearTimeouts(); // clear any timeouts
					pinpad.timeouts.push(setTimeout(function() { // push a timeout onto the queue to re-obfuscate that last character we just pushed
						settings.$readout.html(getObfuscated());
					}, settings.newCharHangTime));
				} else {
					formattedText = format();
				}

				settings.$readout.html(formattedText); // update the readout 
				settings.textChange(pinpad); // fire text change event 
			});

			updateReadout();
		});
	};
})(jQuery);