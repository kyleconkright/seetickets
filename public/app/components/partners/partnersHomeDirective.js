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