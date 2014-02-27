/**
 * Created by mwoods0 on 2/21/14.
 */
describe("ContactServices Tests", function(){
	var contactServices, $httpBackend, config, $q, scope;
	beforeEach(module("reactSandbox"));
	beforeEach(inject(function(_contactServices_, _$httpBackend_, _config_, _$q_){
		contactServices = _contactServices_;
		$httpBackend = _$httpBackend_;
		config = _config_;
		$q = _$q_;
		var defer = $q.defer();
		defer.resolve("resolveData");

	}));

	it("Should return all of the available contacts", function(){
		expect(contactServices.getAllContacts).toBeDefined();
		$httpBackend.whenJSONP(config.host + "/api/contacts?callback=JSON_CALLBACK").respond({
			"name" : "Marques"
		});

		var promise = contactServices.getAllContacts(),
			mydata;
		promise.then(function(data){
			mydata = data;
		});

		$httpBackend.flush();
		expect(mydata.name).toBe("Marques");

	});

	it("Should be able to save a new contact", function(){
		$httpBackend.whenPOST(config.host + "/api/contacts").respond(200, '');
		var resp = contactServices.saveNewContact({"name" : "Drake"});
		$httpBackend.flush();
		expect(resp).toBe(true);
	});

});