(function() {
	// orbit controller
	angular.module("orbitApp")
		.controller("orbitController", ["$scope", "planetFactory", function($scope, planetFactory){
			$scope.planets = {};
			$scope.planet = {};
			$scope.animationOn = false;
			$scope.orbitSpeed = 4;

			// toggle orbit animation
			$scope.toggleOrbit = function() {
				if ($scope.animationOn === true) {
					// start orbit
					orbit();
				}
				else {
					// stop animation
					$("#movingOrb").stop();
				}
				// toggle animation bool
				$scope.animationOn = !$scope.animationOn;
			};

			// randomly change a planet
			$scope.changePlanet = function() {
				setRandomPlanet($scope.planets);
			};

			// orbit function using jQuery animate
			function orbit() {
				// get reference to moving orb
				$orb = $("#movingOrb");
				// init random unused property for animation
				$orb.css("text-indent", 0);
				// jQuery animation
		        $orb.animate({
		        	// animate unused property
		        	"text-indent": 2 * Math.PI
		        },
		        {
		        	// animate orbit
					step: function (now) {
                    	$orb.css("left", 150 * Math.cos(now))
                        	.css("top", 150 * Math.sin(now))
                	},
               		duration: $scope.orbitSpeed * 1000,
               		easing: "linear",
               		complete: orbit
				});
			};

			// sets random planet on the scope
			function setRandomPlanet(planets) {
				// get total planets
				var total = planets.length;
				// generate random planet id from list of planets
				var newId = Math.floor(Math.random() * total) + 1;
				// get planet by id
				planetFactory.getPlanet(newId)
					.success(function(planet) {
						$scope.planet = planet;
					})
					.error(function(data, status, headers, config) {
						// log error
						$log.log(data.error + ": " + status);
					});
			};

			// init function
			function init() {
				// load planets
				planetFactory.getPlanets()
					.success(function(planets) {
						$scope.planets = planets;
						// pick a random planet to start
						setRandomPlanet($scope.planets);
						// start orbit
						$scope.toggleOrbit();
					})
					.error(function(data, status) {
						// log error
						$log.log(data.error + ": " + status);
					});
			};

			// call init
			init();
		}]);
}());

