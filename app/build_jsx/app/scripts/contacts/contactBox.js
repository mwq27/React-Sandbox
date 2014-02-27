/**
 * @jsx React.DOM
 */
window.ContactBox = React.createClass({
	mixins : [React.addons.LinkedStateMixin],
	getInitialState: function(){
		return {
			data : []
		};
	},
	componentWillMount : function(){
		var scope = this.props.scope;
		scope.ContactBox.react = this;
		scope.$apply();
		scope.getAllContacts();
	},

	handleContactSubmit: function(contact){
		var scope = this.props.scope;
			scope.saveNewContact(contact);
	},
	render : function(){
		var scope = this.props.scope,
			html = [];
		html.push(React.DOM.div( {className:"contactBox row"}, 
			React.DOM.h3(null, "Contacts"),
			NewContact( {onContactSubmit:this.handleContactSubmit} ),
			ContactList( {data:this.state.data} )
		));

		return (
			React.DOM.div(null, html[0])
		);
	}
});