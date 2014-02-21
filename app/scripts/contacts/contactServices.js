"use strict";
angular.module("reactSandbox.contactServices", [])
	.service("contactServices", ["$log", "$http","config", "$q", function($log, $http, config, $q){
		return {
			getAllContacts: function(){
				var defer = $q.defer();
				$http.get(config.host + "/api/contacts").success(function(data, status, header){
					$log.debug(data);
					defer.resolve(data);

				}).error(function(data){
						defer.reject(data);
					});
				return defer.promise;
			}
		}
	}]);