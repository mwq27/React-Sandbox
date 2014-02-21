"use strict";
angular.module("reactSandbox.contactServices", [])
	.service("contactServices", ["$log", "$http", function($log, $http){
		return {
			getAllContacts: function(){
				return true;
			}
		}
	}]);