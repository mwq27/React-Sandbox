/** @jsx React.DOM */
window.Contact = React.createClass({
	render : function(){
		return (
			<tr className="">
				<td>{this.props.name}</td>
				<td>{this.props.email}</td>
				<td>{this.props.phone}</td>
			</tr>
		);
	}
});