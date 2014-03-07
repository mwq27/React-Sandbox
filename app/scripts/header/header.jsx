/**
 * @jsx React.DOM
 */
window.Header = React.createClass({
	render : function(){
		return (
			<header className="row">
				<h1>{this.props.children}</h1>
			</header>
		);
	}
});