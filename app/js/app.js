(function () {

	angular.module('app', ['ngRoute','ngProgressLite']);
		
	angular.module('app')
		.controller('AppController', []);

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
		})
		.directive('homeNav', function($location) {
		  return {
		    restrict: 'A',
		    scope: {
		      path: "@homeNav"
		    },
		    link: function(scope, element, attributes) {
		      scope.$on('$locationChangeSuccess', function() {
		        if ($location.path() === scope.path) {
		          element.addClass('light');
		        } else {
		          element.removeClass('light');
		        }
		      });
		    }
		  };
		});


	angular.module('app')
		.directive('testDir',function($timeout){
			return {
				restrict: 'A',
				link: function(scope, element, attrs) {
					$timeout(function(){
						console.log(element[0]);
					});
				}
			}
		});


	angular.module('app')
		.directive('slickSlider', ['$timeout',function($timeout){
			return {
				restrict: 'A',
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api').success(function(response){
						$scope.slides = response;
						ngProgressLite.done();
						console.log($scope.slides);
					});
				}],
				link: function(scope,element,attrs) {
					var loadSlider = function() {
						$(element).slick(scope.$eval(attrs.slickSlider));
					}
					$timeout(loadSlider, 500);
				}
			}
		}]);


	angular.module('app')
		.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

			$locationProvider.html5Mode(true);

			$routeProvider.when('/', {
				templateUrl: 'templates/pages/home/index.html'
			})
			.when('/about', {
				templateUrl: 'templates/pages/about/index.html'
			})
			.when('/solutions', {
				templateUrl: 'templates/pages/solutions/index.html'
			})
			.when('/insights', {
				templateUrl: 'templates/pages/insights/index.html'
			})
			.when('/partners', {
				templateUrl: 'templates/pages/partners/index.html'
			})
			.when('/contact', {
				templateUrl: 'templates/pages/contact/index.html'
			})
			.otherwise({redirectTo: '/'});

	}]);

}());

