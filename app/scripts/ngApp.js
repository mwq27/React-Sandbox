/**
 * Created by mwoods0 on 2/11/14.
 */
"use strict";
angular.module("reactSandbox", ["ngRoute", "ngReact", "reactSandbox.homeCtrl",
		"reactSandbox.contactServices",
		"reactSandbox.constants"])
	.config(function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl :"tpl/home.tpl.html",
				controller: "homeCtrl"
			});
	});