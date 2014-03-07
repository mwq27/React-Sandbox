/**
 * @jsx React.DOM
 */
window.Header = React.createClass({
	render : function(){
		return (
			React.DOM.header( {className:"row"}, 
				React.DOM.h1(null, this.props.children)
			)
		);
	}
});