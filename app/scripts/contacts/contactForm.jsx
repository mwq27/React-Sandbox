/** @jsx React.DOM */
var NewContact = React.createClass({


	getInitialState : function(){
		return {
			data : ''
		}
	},
	handleSubmit: function(){
		var name = this.refs.name.getDOMNode().value.trim(),
			occupation = this.refs.occupation.getDOMNode().value.trim(),
			nickname = this.refs.nickname.getDOMNode().value.trim(),
			email = this.refs.email.getDOMNode().value.trim(),
			phone = this.refs.phone.getDOMNode().value.trim();
		this.props.onContactSubmit({name: name, occupation: occupation, nickname: nickname, email: email, phone: phone});
		if(!name || !occupation || !nickname) {
			return false;
		}

		this.refs.name.getDOMNode().value = '';
		this.refs.occupation.getDOMNode().value = '';
		this.refs.nickname.getDOMNode().value = '';
		this.refs.email.getDOMNode().value = '';
		this.refs.phone.getDOMNode().value = '';
		return false;

	},

	render: function(){
		return (
			<div className="large-4 columns">
				<p>{this.state.data}</p>
			<form onSubmit={this.handleSubmit}>
				<fieldset>
					<legend>Add New Contact</legend>
					<label htmlFor="name">
						<input type="text" placeholder="Name" ref="name"/>
					</label>
					<label htmlFor="lastname">
						<input type="text" placeholder="Occupation" name="occupation" ref="occupation"/>
					</label>
					<label htmlFor="email">
						<input type="text" placeholder="nickname" ref="nickname"/>
					</label>
					<label htmlFor="email">
						<input type="email" placeholder="Email" ref="email"/>
					</label>
					<label htmlFor="phone">
						<input type="text" placeholder="Phone Number" ref="phone"/>
					</label>

					<button type="submit" className="button">Save</button>
				</fieldset>
			</form>
		</div>
			)

	}
});
//React.renderComponent(<NewContact />, document.getElementById("example"));