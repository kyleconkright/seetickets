(function(){

	angular.module('app')
		.directive('contact', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', '$sce', function($scope, $http, ngProgressLite, $sce){
					ngProgressLite.start();
					$http.get('/api/contact').success(function(response){
						$scope.contact = $sce.trustAsHtml(response);
						ngProgressLite.done();
					});
				}]
			}
		})

})();