/**
 * Created by mwoods0 on 2/21/14.
 */
describe("ContactServices Tests", function(){
	var contactServices, $httpBackend;
	beforeEach(module("reactSandbox"));
	beforeEach(inject(function(_contactServices_, _$httpBackend_){
		contactServices = _contactServices_;
		$httpBackend = _$httpBackend_;
	}));

	it("Should return all of the available contacts", function(){
		expect(contactServices.getAllContacts).toBeDefined();
	});
});