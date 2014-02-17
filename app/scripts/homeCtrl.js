"use strict";
angular.module("ngApp.homeCtrl", [])
	.controller("homeCtrl", function($scope){
		$scope.testIf = true;
		$scope.bindData = "Hello from the Scope";

		$scope.clickTest = function(){
			console.log("Clicking me from a rendered React Component");
		};
		$scope.mydata = {
			time : "9AM",
			day : "monday",
			week : "52",
			candy : "Snicker"
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