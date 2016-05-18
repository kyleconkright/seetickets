(function(){
	angular.module('app')
		.directive('footerPhotos', function(){
			return {
				restrict: "A",
				templateUrl: "app/shared/footer-photos/footer-photos.html",
				controller: ['$scope', '$http', function($scope, $http){
					$http.get('/api/footerphotos').success(function(response){
						$scope.photos = response;
					});
				}]
			}
		})

})();