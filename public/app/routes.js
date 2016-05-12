(function () {

	angular.module('app')
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'app/components/home/index.html'
			})
			.when('/about', {
				templateUrl: 'app/components/about/index.html'
			})
			.when('/solutions', {
				templateUrl: 'app/components/solutions/index.html'
			})
			.when('/insights', {
				templateUrl: 'app/components/insights/index.html'
			})
			.when('/partners', {
				templateUrl: 'app/components/partners/index.html'
			})
			.when('/contact', {
				templateUrl: 'app/components/contact/index.html'
			})
			.otherwise({redirectTo: '/'});

	}]);

})();