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