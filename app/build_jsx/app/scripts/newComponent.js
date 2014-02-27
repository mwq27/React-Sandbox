/** @jsx React.DOM */
var APP = React.createClass({displayName: 'APP',
//	getInitialState : function(){
//		return {
//			date: '1999/12/31',
//			status : 'NotFromServer',
//			code : '1'
//		};
//	},
//	componentWillMount : function(){ // This fires right before the initial render
//		this.setState({
//			date: 'first date',
//			status : 'first status',
//			code : 'first code'
//		});
//	},
//	componentDidMount : function(){ // This fires after the initial rendering.  it's better to put ajax requests in here.
//		$.get(this.props.source, function(result){
//			this.setState({
//				date: result.date,
//				status : result.status,
//				code : result.code
//			});
//		}.bind(this));
//	},
//	getDefaultProps : function(){ // Setting Default properties
//		return {
//			txt: "Here's some default text.  You haven't set the 'txt' attribute on the <APP/> component",
//			cat: 0
//		};
//	},
//	propTypes : { // Define what types of properties to expect
//		txt: React.PropTypes.string,
//		cat: React.PropTypes.number.isRequired // this is required now
//	},
//
//	componentWillUpdate : function(nextProps, nextState){
//		console.log(nextProps, nextState);
//	},
	handleClick : function(param){
		alert(param);
	},
	render: function(){
		return (
			React.DOM.div(null, 
				React.DOM.button( {onClick:this.handleClick("yoo")}, "CLick Me")
			)
			)

	}
});
React.renderComponent(APP( {txt:"whatt it do", cat:12, source:"scripts/data.json"} ), document.getElementById("example"));