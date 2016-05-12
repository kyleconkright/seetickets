(function () {

	angular.module('app', ['ngRoute','ngProgressLite']);

})();
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
(function () {
	angular.module('app')
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
})();
(function () {
	angular.module('app')
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
})();
(function(){
	
	angular.module('app')
		.controller('NavController', ['$scope', '$location', function($scope, $location){
			$scope.isActive = function(route) {
				return route === $location.path();
			}
			$scope.mobileMenu = function() {
				var menu = '.top-nav .menu';
				var menuTrigger = '.mobile-menu-trigger';
				if($(menu).hasClass('open')) {
					$(menu).removeClass('open');
					$(menuTrigger).html('<i class="material-icons">menu</i>');
				} else {
					$(menu).addClass('open');
					$(menuTrigger).html('<i class="material-icons">chevron_right</i>');
				}
			}
		}])

})();
(function(){

	angular.module('app')
		.directive('slickSlider', function($timeout){
			return {
				restrict: 'A',
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api').success(function(response){
						$scope.slides = response;
						ngProgressLite.done();
					});
				}],
				link: function(scope, element, attrs) {
					console.log(element);
					// $(window).load(function(){
					// 	$(element).slick(scope.$eval(attrs.slickSlider));
					// })
					var loadSlider = function() {
						$(element).slick(scope.$eval(attrs.slickSlider));
					}
					$timeout(loadSlider, 1000);
				}
			}
		});
		
})();