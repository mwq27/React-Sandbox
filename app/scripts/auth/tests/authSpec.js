"use strict";
describe("Authorization Tests", function(){
	var authInt,sessionStorage;
	beforeEach(module("reactSandbox"));

	beforeEach(inject(function(_authInterceptor_){
		authInt = _authInterceptor_;
		sessionStorage = {};
	}));

	describe("Interceptor tests", function(){
		it("Should not be valid without a token set in sessionStorage", function(){
			expect(sessionStorage.token).toBeDefined();
		});

		it("Should set the Authorization header with Bearer", function(){
			expect(true).toBe(false);
		});
	});
});