const mongoose = require('mongoose');

let ContactSchema = new mongoose.Schema({
	id: String,
	otherIds: [{
		email: String,
		id: String
	}],
	domainId: String,
	email: String,
	name: String,
	phoneNumber: String
}, { collection: 'contacts' });

mongoose.model('Contact', ContactSchema);
