/** @jsx React.DOM */
window.APP = React.createClass({
	getInitialState : function(){
		return {
			date: this.props.scope,
			status : 'NotFromServer',
			code : '1'
		};
	},
	componentWillMount : function(){ // This fires right before the initial render
		this.setState({
			date: 'first date',
			status : 'first status',
			code : 'first code',
			ngdata : ""
		});
	},
	componentDidMount : function(){ // This fires after the initial rendering.  it's better to put ajax requests in here.
//		$.get(this.props.source, function(result){
//			this.setState({
//				date: this.props.scope.candy,
//				status : result.status,
//				code : result.code
//			});
//		}.bind(this));

		this.setState({
			ngdata : this.props.data
		});
	},
	getDefaultProps : function(){ // Setting Default properties
		return {
			txt: "Here's some default text.  You haven't set the 'txt' attribute on the <APP/> component",
			cat: 100,
			source : "scripts/data.json"
		};
	},
	propTypes : { // Define what types of properties to expect
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired // this is required now
	},

	componentWillUpdate : function(nextProps, nextState){
		console.log(nextProps, nextState);
	},
	handleClick : function(){
		$.get('scripts/data2.json', function(result){
			this.setState({
				date: result.date,
				status : result.status,
				code : result.code
			});
		}.bind(this));
	},
	updateScope : function(){
		var scope = this.props.scope;
			scope.mydata.time = "1:30PM";
		/*
		Run an $apply so that the scope updates everywhere :)
		 */
		scope.$apply();

	},
	render: function(){
		var scope = this.props.scope;
		return (
			<div className="row">
				<p>{this.props.txt}</p>
				<p></p>
				<h2>Date State : {this.state.date}</h2>
				<h2>Status State : {this.state.status}</h2>
				<h2>Code State : {this.state.code}</h2>
				<button onClick={scope.clickTest}>Click me</button>
				<button onClick={this.updateScope}>Update the Scope</button>
			</div>
			)
	}
});
//React.renderComponent(<APP txt="whatt it do" cat={12} source="scripts/data.json" />, document.getElementById("example"));