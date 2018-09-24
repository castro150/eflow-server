let express = require('express');
let router = express.Router();

const mongoose = require('mongoose');
const User = mongoose.model('Contact');

// GET users listing.
router.get('/', function(req, res) {
	// TODO remove: just to test
	let contact = new User({ name: 'Rafael' });
	console.log(contact);
	contact.save(function (err, contact) {
		if (err) return console.error(err);
		console.log('Saved contact: ', contact);
		res.send('respond with a resource');
	});
});

module.exports = router;
