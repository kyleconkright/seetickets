(function () {

	angular.module('app', ['ngRoute','ngProgressLite']);

})();
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