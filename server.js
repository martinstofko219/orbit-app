var express = require("express");
var path = require("path");

// set app variables
var app = express();
app.set("port", 8080);

// set static middleware
app.use(express.static(path.join(__dirname, "/public")));

// get planets
app.get("/api/planets", function(req, res) {
	res.json(planets);
});

// get planet by id
app.get("/api/planets/:id", function(req, res){
	var id = parseInt(req.params.id);
	var planet = {};
	// loop through planets
	for (var i = 0; i < planets.length; i++) {
		if (planets[i].id === id) {
			planet = planets[i];
			break;
		}
	}
	res.json(planet);
});

// start server
var server = app.listen(app.get("port"), function() {
	var port = server.address().port;
	console.log("Listening on port " +  port);
	console.log("Use ^c to stop the server");
});

// planets array
var planets = [
	{
		id: 1,
		name: "Mercury",
		color: "gray",
		radius: 5
	},
	{
		id: 2,
		name: "Venus",
		color: "yellow",
		radius: 12
	},
	{
		id: 3,
		name: "Earth",
		color: "blue",
		radius: 15
	},
	{
		id: 4,
		name: "Mars",
		color: "red",
		radius: 8
	}
];