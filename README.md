# Getting ReactJS working with AngularJS
============

I created this project to try and see what is possible when I try to use ReactJS with an Angular app.  I've tried to answer the questions:
* How can I re-render a component when my $scope changes?
	* It's doable!
* How do I call functions declared inside my controllers from a React component?
	* Use David Chang's awesome ngReact component.  The scope is passed to the component as a property.
* Can I use angular directives on the elements inside the React Component
	* ...nope...
* Can we update the $scope FROM the React component?
	* Since the scope is passed in, we can modify it.  Just remember to call scope.$apply() after modifications.

In loginArea.jsx component:

```js
componentWillMount : function(){
	var scope = this.props.scope;
	scope.LoginArea.react = this;
},
```

In authorization controller we can now have :

```js
$scope.LoginArea = {};
$scope.authenticateUser = function(user){
	var username = user.username,
		password = user.password;
	auth.login(username, password)
		.then(function(data){
			$scope.user.loggedin = true;
			$scope.LoginArea.react.setState({loggedIn: true});
		}, function(data){
			$log.error(data);
			$log.error("error logging in");
		});
};
```

The important line being:

```js
$scope.LoginArea.react.setState({loggedIn: true});
```

This is where I can call setState, thus re-rendering the LoginArea component.

