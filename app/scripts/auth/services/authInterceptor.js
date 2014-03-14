"use strict";
angular.module("reactSandbox.services.authInterceptor", [])
	.factory("authInterceptor", function($log, $rootScope, $q, $window){
		return {
			request : function(config){
				config.headers = config.headers || {};
				if($window.sessionStorage.token) {
					config.headers.Authorization = "Bearer " + $window.sessionStorage.token;
				}
				return config;
			},
			response : function(response){
				if (response.status === 401) {
					//Do something if the user is not authenticated
					$log.error("User is not authenticated");
				}
				return response || $q.when(response);
			}
		};
	});