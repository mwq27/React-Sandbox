/**
 * Created by mwoods0 on 2/21/14.
 */
describe("ContactServices Tests", function(){
	var contactServices, $httpBackend, config, $q;
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
		$httpBackend.whenGET(config.host + "/api/contacts").respond({
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

});