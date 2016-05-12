(function(){

	angular.module('app')
		.directive('partners', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					// $scope.partners = 'partners content';
					$http.get('/api/partners').success(function(response){
						$scope.partners = response.partners;
						ngProgressLite.done();
					});
				}]
			}
		})

})();