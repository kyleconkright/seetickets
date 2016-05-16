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