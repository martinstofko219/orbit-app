(function() {
	// orbit planet directive
	angular.module("orbitApp")
		.directive("orbitPlanet", function() {
			return {
				restrict: "A",
				link: function(scope, element, attrs) {
					scope.$watch("planet", function(newVal) {
						var newCss = {
							width: newVal.radius * 2 + "px",
							height: newVal.radius * 2 + "px",
							backgroundColor: newVal.color
						}
						element.css(newCss);
					}, true);
				}
			};
		});
}());