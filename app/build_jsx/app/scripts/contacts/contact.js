/** @jsx React.DOM */
var Contact = React.createClass({displayName: 'Contact',
	render : function(){
		return (
			React.DOM.li( {className:"large-4"}, 
				React.DOM.p(null, React.DOM.strong(null, "Name:"), this.props.name),
				React.DOM.p(null, React.DOM.strong(null, "Email:"), this.props.email),
				React.DOM.p(null, React.DOM.strong(null, "Phone:"), this.props.phone),
				React.DOM.p(null, React.DOM.strong(null, "Occupation:"), this.props.occupation)
			)
		);
	}
});