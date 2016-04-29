angular.module('app', ['ngRoute']);
	
angular.module('app')
	.controller('AppController', []);

angular.module('app')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when('/about', {
			templateUrl: 'templates/pages/about/index.html'
		})
		.when('/contact', {
			templateUrl: 'templates/pages/contact/index.html'
		})
		.otherwise({redirectTo: '/'});

}]);
