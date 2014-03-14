/**
 * @jsx React.DOM
 */
var ReactTestUtils, contactForm, onsubmit;
describe("Contact Form Component", function(){
	beforeEach(function(){
		ReactTestUtils = React.addons.TestUtils;
		var cont = document.createElement("div");
		cont.id="jasmine_content";
		var bod = document.getElementsByTagName('body')[0];
			bod.parentNode.insertBefore(cont, bod);
		contactForm = jasmineReact.renderComponent(NewContact());
	});

	it("Should not submit an empty form", function(){
		contactForm.handleSubmit();
		expect(contactForm.state.invalid).toBe(true);
	});

	it("Should accept a name, phone, and email address", function(){
			expect(contactForm.refs.name).toBeDefined();
			expect(contactForm.refs.email).toBeDefined();
			expect(contactForm.refs.phone).toBeDefined();
	});
});