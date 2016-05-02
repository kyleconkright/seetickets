angular.module('app', ['ngRoute']);
	
angular.module('app')
	.controller('AppController', []);

angular.module('app')
	.controller('SlideController', ['$scope', function($scope){
		$scope.slides = ['slide 1','slide 2'];
	}]);

angular.module('app')
	.controller('NavController', ['$scope', '$location', function($scope, $location){
		$scope.isActive = function(route) {
			return route === $location.path();
		}
	}])
	.directive('myActiveLink', function($location) {
	  return {
	    restrict: 'A',
	    scope: {
	      path: "@myActiveLink"
	    },
	    link: function(scope, element, attributes) {
	      scope.$on('$locationChangeSuccess', function() {
	        if ($location.path() === scope.path) {
	          element.addClass('active');
	        } else {
	          element.removeClass('active');
	        }
	      });
	    }
	  };
	});


angular.module('app')
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'templates/pages/home/index.html'
		})
		.when('/about', {
			templateUrl: 'templates/pages/about/index.html'
		})
		.when('/contact', {
			templateUrl: 'templates/pages/contact/index.html'
		})
		.otherwise({redirectTo: '/'});

}]);



