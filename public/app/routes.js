(function () {

	angular.module('app')
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'components/home/index.html'
			})
			.when('/about', {
				templateUrl: 'components/about/index.html'
			})
			.when('/solutions', {
				templateUrl: 'components/solutions/index.html'
			})
			.when('/insights', {
				templateUrl: 'components/insights/index.html'
			})
			.when('/partners', {
				templateUrl: 'components/partners/index.html'
			})
			.when('/contact', {
				templateUrl: 'components/contact/index.html'
			})
			.otherwise({redirectTo: '/'});

	}]);

})();