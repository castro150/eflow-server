const mongoose = require('mongoose');

let ReadingSchema = new mongoose.Schema({
	id: String,
	otherIds: [{
		email: String,
		id: String
	}],
	domainId: String,
	email: String,
	name: String,
	phoneNumber: String
}, { collection: 'readings' });

mongoose.model('Reading', ReadingSchema);
