(function(){

	angular.module('app')
		.directive('about', function(){
			return {
				restrict: "A",
				controller: ['$scope', 'ngProgressLite', function($scope, ngProgressLite){
					$scope.about = 'hello';
				}]
			}
		})

})();