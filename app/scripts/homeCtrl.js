"use strict";
angular.module("reactSandbox.homeCtrl", [])
	.controller("homeCtrl",["$scope", "contactServices","$log", "$rootScope", function($scope, contactServices, $log, $rootScope){
		$scope.testIf = false;
		$scope.bindData = "Hello from the Scope";
		$scope.contacts ={};
		/**
		 * Create an object with the name of a React component.  This way, we can call setState on the correct
		 * component.
		 */
		$scope.ContactBox = {};

		$scope.saveNewContact = function(contact){
			contactServices.saveNewContact(contact).then(function(data){
				$scope.contacts = data;
				/*
				In the ContactBox component, I attach React to the scope.  This way, I can use React's methods
				like below.  setState will re-render the component.
				 */
				$scope.ContactBox.react.setState({data: $scope.contacts});
			});
		};

		$scope.getAllContacts = function(){
			contactServices.getAllContacts().then(function(data){
				$scope.contacts = data;
				$scope.ContactBox.react.setState({data: $scope.contacts});
			});
		};

		$scope.reRenderMe  = function(){
			$scope.bindData = "RENDERING FROM THE ANGUALR ASDOOSADFS";
			$scope.ContactBox.react.setState({data: [{name : "marques", email : "mariwn@nac.com"}]});
		};

		$scope.mydata = {
			time : "9AM",
			day : "monday",
			week : "52",
			candy : "Snicker"
		};

		$scope.user = {
			loggedin : false
		};

		$scope.user.login = function(){
			/**
			 * Log a user in
			 */
			$scope.user.loggedin = true;
		};

		$scope.turnOn = function(){
			$scope.testIf = !$scope.testIf;
		};

	}]);