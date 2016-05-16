(function(){
	angular.module('app')
		.directive('dyk', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', function($scope, $http){

					$http.get('/api/partners').success(function(response){
						$scope.dyk = response;
						alert($scope.dyk);
					});
				}]
			}
		})

})();