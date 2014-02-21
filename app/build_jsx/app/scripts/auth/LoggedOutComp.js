/** @jsx React.DOM */
window.LoggedOutComp = React.createClass({
	render : function(){
		if(this.props.authStatus === false){
			this.props.display = "block";
		}else{
			this.props.display = "none";
		}

		return (
			React.DOM.div( {className:"loggedOut", style:{display : this.props.display}}, 
				React.DOM.p(null, "I am not logged in")
			)
		)
	}
});