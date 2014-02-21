/** @jsx React.DOM */
var Contact = React.createClass({
	render : function(){
		return (
			<li className="">
				<p><strong>Name:</strong> {this.props.name}</p>
				<p><strong>Email:</strong> {this.props.email}</p>
				<p><strong>Phone:</strong> {this.props.phone}</p>
				<p><strong>Occupation:</strong> {this.props.occupation}</p>
			</li>
		);
	}
});