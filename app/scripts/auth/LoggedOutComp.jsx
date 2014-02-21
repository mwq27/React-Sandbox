/** @jsx React.DOM */
window.LoggedOutComp = React.createClass({
	render : function(){
		if(this.props.authStatus === false){
			this.props.display = "block";
		}else{
			this.props.display = "none";
		}

		return (
			<div className="loggedOut" style={{display : this.props.display}}>
				<p>I am not logged in</p>
			</div>
		)
	}
});