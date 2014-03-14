/**
 * Created by mwoods0 on 2/11/14.
 */
"use strict";
angular.module("reactSandbox", ["ngRoute", "ngReact",
		"reactSandbox.homeCtrl",
		"reactSandbox.services.contacts",
		"reactSandbox.constants",
		"reactSandbox.controllers.authorization",
		"reactSandbox.services.authorization",
		"reactSandbox.services.authInterceptor"])
	.config(function($routeProvider, $httpProvider){
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.interceptors.push('authInterceptor');
		$routeProvider
			.when("/",{
				templateUrl :"tpl/home.tpl.html",
				controller: "homeCtrl"
			});
	});