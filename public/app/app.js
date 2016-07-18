(function() {
    var app = angular.module("orbitApp", ["ngRoute"]);

    app.config(["$routeProvider", function($routeProvider) {
    	// configure routes
    	$routeProvider
    		.when("/", {
    			controller: "orbitController",
    			templateUrl: "app/views/main.html"
    		})
    		.otherwise({ redirectTo: "/" });
    }]);
}());