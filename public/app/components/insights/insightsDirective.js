(function(){

	angular.module('app')
		.directive('insights', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/insights').success(function(response){
						$scope.about = response.about;
						ngProgressLite.done();
					});
				}]
			}
		})

})();