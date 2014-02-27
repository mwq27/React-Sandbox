"use strict";
angular.module("reactSandbox.services.authorization", [])
	.service("authService", ["$log","$q","$window","$http","config", function($log, $q, $window, $http, config){
		return {
			login : function(u, p){
				var defer = $q.defer();
				$http
					.post(config.host + '/authenticate', {username : u, password : p})
					.success(function(data, status, headers, config){
						$window.sessionStorage.token = data.token;
						defer.resolve(data);
					})
					.error(function(data, status, headers, config){
						delete $window.sessionStorage.token;
						defer.reject()
					});

				return defer.promise;
			}
		}

	}]);
