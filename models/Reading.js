const mongoose = require('mongoose');

let ReadingSchema = new mongoose.Schema({
	sensor: { type: mongoose.Schema.Types.ObjectId, ref: 'Sensor' },
	date: { type: Date, default: Date.now },
	flow: Number,
	consumption: Number
}, { collection: 'readings' });

mongoose.model('Reading', ReadingSchema);
