const mongoose = require('mongoose');

let SensorSchema = new mongoose.Schema({
	code: String,
	name: String
}, { collection: 'sensors' });

mongoose.model('Sensor', SensorSchema);
