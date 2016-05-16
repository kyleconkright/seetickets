(function(){

	angular.module('app')
		.directive('partners', function(){
			return {
				restrict: "A",
				controller: ['$scope', '$http', 'ngProgressLite', function($scope, $http, ngProgressLite){
					ngProgressLite.start();
					$http.get('/api/partners').success(function(response){
						$scope.partners = response;
						$scope.brands = [];
						brnds = [];
						for(i in response.partners) {
							for(j in response.partners[i].brands) {
								$scope.brands.push(
									{
										"name":response.partners[i].brands[j].name,
										"logo":response.partners[i].brands[j].logo,
										"category":response.partners[i].category}
								);
							}
						}
						ngProgressLite.done();
					});
					$scope.category = 'music';

					$scope.showLogos = function(setCategory) {
						$scope.category = setCategory;
					}

					$scope.isSelected = function(checkCategory) {
						return $scope.category === checkCategory;

					}
				}]
			}
		})


})();