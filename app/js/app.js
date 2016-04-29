angular.module('app', ['ngRoute']);
	
angular.module('app')
	.controller('AppController', []);

angular.module('app')
	.config(function($routeProvider, $locationProvider){
		$routeProvider.when('/about', {
			templateUrl: 'templates/pages/about/index.html'
		})
		.when('/contact', {
			templateUrl: 'templates/pages/contact/index.html'
		})
		.otherwise({redirectTo: '/'});

		$locationProvider.html5Mode(true);

});