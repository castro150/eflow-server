let express = require('express');
let router = express.Router();

// TODO remove: just to test
const mongoose = require('mongoose');
const User = mongoose.model('Contact');

// GET home page.
router.get('/', function(req, res) {
	// TODO remove: just to test
	let contact = new User({ name: 'Rafael' });
	console.log(contact);
	contact.save(function (err, contact) {
		if (err) return console.error(err);
		console.log('Saved contact: ', contact);
	});

	res.send('EFlow Server is running!');
});

module.exports = router;
