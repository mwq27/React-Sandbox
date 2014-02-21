"use strict";

describe("Constants Config", function(){
	var config;
	beforeEach(module("reactSandbox"));

	beforeEach(inject(function(_config_){
		config = _config_;
	}));

	it("Should have a host option", function(){
		expect(config.host).toBe("http://localhost:4000");
	});
});
