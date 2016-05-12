(function(){

	angular.module('app')
		.directive('partners', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/parters').success(function(response){
						$scope.partners = response.partners;
						ngProgressLite.done();
					});
				}]
			}
		})

})();