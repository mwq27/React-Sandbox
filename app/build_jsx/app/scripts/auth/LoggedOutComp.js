/** @jsx React.DOM */
window.LoggedOutComp = React.createClass({
	loginSubmit : function(){
		var username = this.refs.username.getDOMNode().value.trim(),
			password = this.refs.password.getDOMNode().value.trim();

		this.props.loginUser({username: username, password: password});
		return false;
	},


	render : function(){
		if(this.props.authStatus === false){
			this.props.display = "block";
		}else{
			this.props.display = "none";
		}

		return (
			React.DOM.div( {className:"loggedOut", style:{display : this.props.display}} , 
				React.DOM.p(null, "Log in with username: ", React.DOM.strong(null, "john.doe"),", password: ", React.DOM.strong(null, "foobar"),".  I didn't write a complete authorization system since I just wanted to show this working with Angular."),
				React.DOM.form( {onSubmit:this.loginSubmit}, 
					React.DOM.input( {type:"text", placeholder:"Username", name:"username", ref:"username"} ),
					React.DOM.input( {type:"password", placeholder:"Password", name:"password", ref:"password"} ),
					React.DOM.button( {className:"button success"}, "Login")
				)
			)
		)
	}
});