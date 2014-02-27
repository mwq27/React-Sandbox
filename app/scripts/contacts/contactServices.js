"use strict";
angular.module("reactSandbox.services.contacts", [])
	.service("contactServices", ["$log", "$http","config", "$q", function($log, $http, config, $q){
		var self = this;
		var getAllContacts = function(){
				var defer = $q.defer();


				$http({
					method : "JSONP",
					url: config.host + "/api/contacts?callback=JSON_CALLBACK"
				}).success(function(data){
						$log.debug(data);
						defer.resolve(data);
					}).error(function(data, status, headers, config){
						$log.error("error");
						defer.reject(data);
					});
				return defer.promise;
			};

		var saveNewContact = function(contact){
			var defer = $q.defer();
			$http.post(config.host + "/api/contacts", contact).success(function(data){
				getAllContacts().then(function(data){
					defer.resolve(data);
				});
			}).error(function(data, status, headers, config){
					$log.error("error");
					return false;
				});
			return defer.promise;
		};
		return {
			getAllContacts: getAllContacts,
			saveNewContact : saveNewContact
		};
	}]);