/** @jsx React.DOM */
var NewContact = React.createClass({displayName: 'NewContact',


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
			React.DOM.div(null, 
				React.DOM.p(null, this.state.data),
			React.DOM.form( {onSubmit:this.handleSubmit}, 
				React.DOM.fieldset(null, 
					React.DOM.legend(null, "Add New Contact"),
					React.DOM.label( {htmlFor:"name"}, 
						React.DOM.input( {type:"text", placeholder:"Name", ref:"name"})
					),
					React.DOM.label( {htmlFor:"lastname"}, 
						React.DOM.input( {type:"text", placeholder:"Occupation", name:"occupation", ref:"occupation"})
					),
					React.DOM.label( {htmlFor:"email"}, 
						React.DOM.input( {type:"text", placeholder:"nickname", ref:"nickname"})
					),
					React.DOM.label( {htmlFor:"email"}, 
						React.DOM.input( {type:"email", placeholder:"Email", ref:"email"})
					),
					React.DOM.label( {htmlFor:"phone"}, 
						React.DOM.input( {type:"text", placeholder:"Phone Number", ref:"phone"})
					),

					React.DOM.button( {type:"submit", className:"button"}, "Save")
				)
			)
		)
			)

	}
});
//React.renderComponent(<NewContact />, document.getElementById("example"));