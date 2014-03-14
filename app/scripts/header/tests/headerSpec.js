"use strict";
var ReactTestUtils;
describe("First Test", function(){
	beforeEach(function(){
		ReactTestUtils = React.addons.TestUtils;
	});

	it("SHould do something here ", function(){
		var header = Header(null, "Something Here");
		ReactTestUtils.renderIntoDocument(header);
		expect(ReactTestUtils.isCompositeComponent(header)).toBe(true);
	});
});