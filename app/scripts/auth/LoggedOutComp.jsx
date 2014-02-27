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
			<div className="loggedOut" style={{display : this.props.display}} >
				<p>Log in with username: <strong>john.doe</strong>, password: <strong>foobar</strong>.  I didn't write a complete authorization system since I just wanted to show this working with Angular.</p>
				<form onSubmit={this.loginSubmit}>
					<input type="text" placeholder="Username" name="username" ref="username" />
					<input type="password" placeholder="Password" name="password" ref="password" />
					<button className="button success">Login</button>
				</form>
			</div>
		)
	}
});