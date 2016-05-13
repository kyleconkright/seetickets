(function () {

	var checkScroll = function(a) {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			a.removeClass("light");
		} else {
			a.addClass("light");
		}
	}

	angular.module('app')
		.directive('homeNav', function($location) {
		  return {
		    restrict: 'A',
		    scope: {
		      path: "@homeNav"
		    },
		    link: function(scope, element, attributes) {
		      scope.$on('$locationChangeSuccess', function() {
		      	
		      	// console.log('location path = '+$location.path()+ '   scope.path = '+scope.path)
						if($location.path() === scope.path) {
							element.addClass("light");	
							checkScroll(element);						
						} else {
							element.removeClass("light");
						}
						$(window).scroll(function() {
							if($location.path() === scope.path) {
								checkScroll(element);
							}
						});
		      });
		    }
		  };
		});
})();

