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