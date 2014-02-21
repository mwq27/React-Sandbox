/** @jsx React.DOM */
window.LoginArea = React.createClass({
	getInitialState : function(){
		return {
			loggedIn : false
		};
	},

	logMeIn : function(){
		var scope = this.props.scope;
		scope.user.loggedin = true;
		console.log(scope.user.loggedin);
		this.setState({
			loggedIn : scope.user.loggedin
		});
	},

	render : function(){
		return (
			React.DOM.div(null, 
				LoggedInComp( {authStatus:  this.state.loggedIn}),
				LoggedOutComp( {authStatus:  this.state.loggedIn}),
				React.DOM.button( {className:"button", onClick:this.logMeIn}, "Log In")
			)
			);
	}
});