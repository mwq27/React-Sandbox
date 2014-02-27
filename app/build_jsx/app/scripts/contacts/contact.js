/** @jsx React.DOM */
window.Contact = React.createClass({
	render : function(){
		return (
			React.DOM.tr( {className:""}, 
				React.DOM.td(null, this.props.name),
				React.DOM.td(null, this.props.email),
				React.DOM.td(null, this.props.phone)
			)
		);
	}
});