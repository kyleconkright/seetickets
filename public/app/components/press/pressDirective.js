(function(){

	angular.module('app')
		.directive('press', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', '$sce', 'ngProgressLite', function($scope, $http, $sce, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/press').success(function(response){
						$scope.press = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();