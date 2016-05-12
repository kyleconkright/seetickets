(function(){
	
	angular.module('app')
		.controller('NavController', ['$scope', '$location', function($scope, $location){
			$scope.isActive = function(route) {
				return route === $location.path();
			}
			$scope.mobileMenu = function() {
				var menu = '.top-nav .menu';
				var menuTrigger = '.mobile-menu-trigger';
				if($(menu).hasClass('open')) {
					$(menu).removeClass('open');
					$(menuTrigger).html('<i class="material-icons">menu</i>');
				} else {
					$(menu).addClass('open');
					$(menuTrigger).html('<i class="material-icons">chevron_right</i>');
				}
			}
		}])

})();