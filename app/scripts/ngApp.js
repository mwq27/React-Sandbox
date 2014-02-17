/**
 * Created by mwoods0 on 2/11/14.
 */
"use strict";
angular.module("reactSandbox", ["ngRoute", "ngReact", "ngApp.homeCtrl"])
	.config(function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl :"tpl/home.tpl.html",
				controller: "homeCtrl"
			});
	});