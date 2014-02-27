/**
 * @jsx React.DOM
 */
window.ContactList = React.createClass({
	render : function(){
		var contactNodes;
		if(!this.props.data.map){
			contactNodes = <Contact name={this.props.data.name}
				email={this.props.data.email} phone={this.props.data.phone}
				occupation={this.props.data.occupation}
				nickname={this.props.data.nickname} > </Contact>;
		}else{
			contactNodes = this.props.data.map(function(contact){
				if(contact.results && contact.results === false){
					return "No contacts available";
				}
				return <Contact name={contact.name} email={contact.email} phone={contact.phone}> </Contact>;
			});
		}
		return (
			<div className="large-6 columns">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
					{contactNodes}
					</tbody>
				</table>
			</div>
		);
	}
});
