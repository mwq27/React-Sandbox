/**
 * @jsx React.DOM
 */
var ContactBox = React.createClass({displayName: 'ContactBox',
	getInitialState: function(){
		return {data:[]};
	},

	loadContactsFromServer : function(){
		$.ajax({
			url : this.props.url,
			dataType :"jsonp",
			jsonpCallback : 'callback'
		}).done(function(msg){
				this.setState({data : msg});
			}.bind(this))
			.fail(function(xhr, status, err){
				console.error("error" + err);
			}.bind(this));
	},
	componentWillMount : function(){
		this.loadContactsFromServer();
	},

	handleContactSubmit: function(contact){
		$.ajax({
			type : "POST",
			url: "http://localhost:4000/api/contacts",
			dataType: "json",
			data : contact,
			success : function(msg){
				this.loadContactsFromServer();
			}.bind(this)
		});
	},
	render : function(){
		return (
			React.DOM.div( {className:"contactBox row"}, 
				React.DOM.h1(null, "Contacts"),
				NewContact( {onContactSubmit:this.handleContactSubmit} ),
				ContactList( {data:this.state.data} )

			)
		)
	}
});

React.renderComponent(ContactBox( {url:"http://localhost:4000/api/contacts?callback=?"}), document.getElementById('example'));