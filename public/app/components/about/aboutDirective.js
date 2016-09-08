(function(){

	angular.module('app')
		.directive('about', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', '$sce', 'ngProgressLite', function($scope, $http, $sce, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/about').success(function(response){
						$scope.about = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();