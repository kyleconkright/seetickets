(function(){

	angular.module('app')
		.directive('about', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/about').success(function(response){
						$scope.about = response.about;
						ngProgressLite.done();
					});
				}]
			}
		})

})();