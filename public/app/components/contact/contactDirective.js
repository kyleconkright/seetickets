(function(){

	angular.module('app')
		.directive('contact', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/contact').success(function(response){
						$scope.about = response.about;
						ngProgressLite.done();
					});
				}]
			}
		})

})();