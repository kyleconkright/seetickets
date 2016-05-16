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