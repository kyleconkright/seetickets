(function () {

	angular.module('app', ['ngRoute','ngProgressLite','ngAnimate']);

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
			.when('/press', {
				templateUrl: 'app/components/press/index.html'
			})
			.when('/contact', {
				templateUrl: 'app/components/contact/index.html'
			})
			.otherwise({redirectTo: '/'});

	}]);

})();
(function(){
	angular.module('app')
		.directive('dyk', function(){
			return {
				restrict: "A",
				templateUrl: "app/shared/dyk/dyk.html",
				controller: ['$scope', '$http','$sce', function($scope, $http, $sce){
					$http.get('/api/didyouknow').success(function(response){
						function randNum(min, max) {
						  return Math.round(Math.random() * (max - min) + min);
						}
						// alert(randNum(0, response.length - 1));
						$scope.dyk = response[randNum(0, response.length - 1)];
					});
				}]
			}
		})

})();
(function(){
	angular.module('app')
		.directive('footerPhotos', function($location){
			return {
				restrict: "A",
				templateUrl: "app/shared/footer-photos/footer-photos.html",
				controller: ['$scope', '$http', function($scope, $http){
					$http.get('/api/footerphotos').success(function(response){
						var photoPath = $location.path().replace('/','');
						$scope.photos = response[photoPath];
						console.log($scope.photos);
						console.log(photoPath);
					});
				}]
			}
		})

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

	var checkScroll = function(a) {
		var scroll = $(window).scrollTop();
		if (scroll >= 300) {
			a.removeClass("light");
		} else {
			a.addClass("light");
		}
	}

	angular.module('app')
		.directive('homeNav', function($location) {
		  return {
		    restrict: 'A',
		    scope: {
		      path: "@homeNav"
		    },
		    link: function(scope, element, attributes) {
		      scope.$on('$locationChangeSuccess', function() {
		      	
					if($location.path() === scope.path) {
						element.addClass("light");	
						checkScroll(element);						
					} else {
						element.removeClass("light");
					}
					$(window).scroll(function() {
						if($location.path() === scope.path) {
							checkScroll(element);
						}
					});
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
		.directive('about', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', '$sce', 'ngProgressLite', function($scope, $http, $sce, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/about').success(function(response){
						// $scope.about = response;
						$scope.about = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();
(function(){

	angular.module('app')
		.directive('contact', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', '$sce', function($scope, $http, ngProgressLite, $sce){
					ngProgressLite.start();
					$http.get('/api/contact').success(function(response){
						$scope.contact = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();
(function(){

	angular.module('app')
		.directive('slickSlider', function($timeout){
			return {
				restrict: 'A',
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/slides').success(function(response){
						$scope.slides = response;
						ngProgressLite.done();
					});
				}],
				link: function(scope, element, attrs) {

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
(function(){

	angular.module('app')
		.directive('insights', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', '$sce', 'ngProgressLite', function($scope, $http, $sce, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/insights').success(function(response){
						$scope.insights = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}],
				link: function(scope, element, attrs) {
					$(element).magnificPopup({
						delegate: 'a.image-popup', // child items selector, by clicking on it popup will open
						type: 'image',
						gallery: {
							enabled:true
						}
					});
				}
 			}
		})

})();
(function(){

	angular.module('app')
		.directive('partners', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/partners').success(function(response){
						$scope.partners = response;
						$scope.brands = [];
						brnds = [];
						for(i in response.partners) {
							for(j in response.partners[i].brands) {
								$scope.brands.push(
									{
										"name":response.partners[i].brands[j].name,
										"logo":response.partners[i].brands[j].logo,
										"category":response.partners[i].category}
								);
							}
						}
						ngProgressLite.done();
					});
					$scope.category = 'music';

					$scope.showLogos = function(setCategory) {
						$scope.category = setCategory;
					}

					$scope.isSelected = function(checkCategory) {
						return $scope.category === checkCategory;

					}
				}]
			}
		})


})();
(function(){

	angular.module('app')
		.directive('partnersHome', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/partners-home').success(function(response){
						$scope.partners = response;
						$scope.brands = response.partners;
						ngProgressLite.done();
					});
				}]
			}
		})


})();
(function(){

	angular.module('app')
		.directive('solutions', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', '$sce', 'ngProgressLite', function($scope, $http, $sce, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/solutions').success(function(response){
						$scope.solutions = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();
(function(){

	angular.module('app')
		.directive('press', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', '$sce', 'ngProgressLite', function($scope, $http, $sce, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/press').success(function(response){
						$scope.press = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();