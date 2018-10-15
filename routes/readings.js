let express = require('express');
let router = express.Router();

const mongoose = require('mongoose');
const Reading = mongoose.model('Reading');

// GET readings listing.
router.get('/', function(req, res) {
	// TODO remove: just to test
	let reading = new Reading({ name: 'Rafael' });
	console.log(reading);
	reading.save(function (err, reading) {
		if (err) return console.error(err);
		console.log('Saved reading: ', reading);
		res.send('respond with a resource');
	});
});

router.post('/', function(req, res) {
	console.log('BODY ', req.body);
	res.send('POST OK');
});

module.exports = router;
