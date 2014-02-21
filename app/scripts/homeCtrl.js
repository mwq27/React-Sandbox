"use strict";
angular.module("reactSandbox.homeCtrl", [])
	.controller("homeCtrl", function($scope){
		$scope.testIf = true;
		$scope.bindData = "Hello from the Scope";

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


		$scope.contacts = [
			{
				firstname : "Marques",
				lastname  : "woodson"
			},
			{
				firstname : "Bernie",
				lastname : "Waz"
			},
			{
				firstname : "howard",
				lastname : "Kuthrapalie"
			}
		];
	});