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
				}]
			}
		})

})();