angular.module("reactSandbox.controllers.authorization", [])
	.controller("authorization", ["$scope", "$log","authService","$rootScope", function($scope, $log, auth,$rootScope){
		/**
		 * Create an object with the name of a React component.  This way, we can call setState on the correct
		 * component.
		 */
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
	}]);
