/**
 * @jsx React.DOM
 */
var ContactList = React.createClass({displayName: 'ContactList',

	render : function(){
		console.log(this.props.data);
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
				return Contact( {name:contact.name, email:contact.email, phone:contact.phone, occupation:contact.occupation, nickname:contact.nickname}  );
			});
		}


		return (
			React.DOM.ul( {className:"contactList circle large-4"}, 
				contactNodes
			)
		);
	}
});
