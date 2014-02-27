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
		html.push(<div className="contactBox row">
			<h3>Contacts</h3>
			<NewContact onContactSubmit={this.handleContactSubmit} />
			<ContactList data={this.state.data} />
		</div>);

		return (
			<div>{html[0]}</div>
		);
	}
});