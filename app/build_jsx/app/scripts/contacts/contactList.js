/**
 * @jsx React.DOM
 */
window.ContactList = React.createClass({
	render : function(){
		var contactNodes;
		if(!this.props.data.map){
			contactNodes = Contact( {name:this.props.data.name,
				email:this.props.data.email, phone:this.props.data.phone,
				occupation:this.props.data.occupation,
				nickname:this.props.data.nickname}  );
		}else{
			contactNodes = this.props.data.map(function(contact){
				if(contact.results && contact.results === false){
					return "No contacts available";
				}
				return Contact( {name:contact.name, email:contact.email, phone:contact.phone} );
			});
		}
		return (
			React.DOM.div( {className:"large-6 columns"}, 
				React.DOM.table(null, 
					React.DOM.thead(null, 
						React.DOM.tr(null, 
							React.DOM.th(null, "Name"),
							React.DOM.th(null, "Email"),
							React.DOM.th(null, "Phone")
						)
					),
					React.DOM.tbody(null, 
					contactNodes
					)
				)
			)
		);
	}
});
