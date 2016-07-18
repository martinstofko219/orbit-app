(function() {
	angular.module("orbitApp")
		.factory("planetFactory", ["$http", function($http) {
			var data = {};

			// get all planets
			data.getPlanets = function() {
				return $http.get("/api/planets");
			};

			// get planet by id
			data.getPlanet = function(id) {
				return $http.get("/api/planets/" + id);
			};

			return data;
		}]);
}());