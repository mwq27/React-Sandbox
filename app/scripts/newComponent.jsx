/** @jsx React.DOM */
var APP = React.createClass({
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
//	handleClick : function(){
//		$.get('scripts/data2.json', function(result){
//			this.setState({
//				date: result.date,
//				status : result.status,
//				code : result.code
//			});
//		}.bind(this));
//	},
	render: function(){
		var item = [];

		for(var x=0; x < 1000; x++){
			item.push( <fieldset>
				<legend>Add New Contact</legend>
				<label htmlFor="name">
					<input type="text" placeholder="Name" ref="name"/>
				</label>
				<label htmlFor="lastname">
					<input type="text" placeholder="Occupation" name="occupation" ref="occupation"/>
				</label>
				<label htmlFor="email">
					<input type="text" placeholder="nickname" ref="nickname"/>
				</label>
				<label htmlFor="email">
					<input type="email" placeholder="Email" ref="email"/>
				</label>
				<label htmlFor="phone">
					<input type="text" placeholder="Phone Number" ref="phone"/>
				</label>

				<button type="submit" className="button">Save</button>
			</fieldset> )
		}
		return (
			<div>{item}</div>
			)

	}
});
React.renderComponent(<APP txt="whatt it do" cat={12} source="scripts/data.json" />, document.getElementById("example"));