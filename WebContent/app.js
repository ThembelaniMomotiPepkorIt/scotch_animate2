var animateApp = angular.module('animateApp',['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'page-home.html',
			controller : 'mainController'
				
		})
		.when('/contact', {
			templateUrl : 'page-contact.html',
			controller : 'contactController'
		})
		.when('/about', {
			templateUrl : 'page-about.html',
			controller : 'aboutController'
		});
});

animateApp.controller('mainController', function($scope){
	$scope.pageClass = "page-home";
});

animateApp.controller('contactController', function($scope){
	$scope.pageClass = "page-contact";
});

animateApp.controller('aboutController', function($scope){
	$scope.pageClass = "page-about";
});