/** @jsx React.DOM */
window.LoginArea = React.createClass({
	getInitialState : function(){
		return {
			loggedIn : false
		};
	},
	componentWillMount : function(){
		var scope = this.props.scope;
		scope.LoginArea.react = this;
	},

	loginUser : function(user){
		var scope = this.props.scope;
			scope.authenticateUser(user);
	},

	render : function(){
		return (
			React.DOM.div(null, 
				LoggedOutComp( {loginUser:this.loginUser, authStatus:  this.state.loggedIn})
			)
			);
	}
});