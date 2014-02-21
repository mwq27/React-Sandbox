/** @jsx React.DOM */
window.LoggedInComp = React.createClass({
	render : function(){
		if(this.props.authStatus === true){
			this.props.display = "block";
		}else{
			this.props.display = "none";
		}
		return (
			React.DOM.div( {className:"loggedOut", style:{display : this.props.display}} , 
				React.DOM.p( {className:"label success"}, "LOGGED IN AWESOME!!")
			)
		);
	}
});