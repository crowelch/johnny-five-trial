var five = require("johnny-five");

(new five.Board()).on("ready", function() {
	var sensor = new five.Sensor({
		pin: "A0",
		limit: [100, 900]
	});
	sensor.on("limit", function(err, data) {
		console.log("%s limit reached ===> %d", data.boundary, data.value);
	});
});
