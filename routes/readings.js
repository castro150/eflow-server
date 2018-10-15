let express = require('express');
let router = express.Router();

const mongoose = require('mongoose');
const Reading = mongoose.model('Reading');

// GET readings listing.
router.get('/', function (req, res, next) {	
	Reading
		.find()
		.populate('sensor')
		.exec(function (err, readings) {
			if (err) return next(err);
			return res.json(readings);
		});
});

// POST create new reading.
router.post('/', function (req, res, next) {
	if (!req.body.sensor) return res.status(400).send('Missing parameter: sensor.');

	let reading = new Reading(req.body);
	reading.save(function (err) {
		if (err) return next(err);
		return res.status(201).send('New reading created with success.');
	});
});

router.get('/actual', function (req, res, next) {	
	Reading
		.find()
		.sort({'date': -1}).limit(1)
		.exec(function (err, readings) {
			if (err) return next(err);
			return res.json(readings[0]);
		});
});

module.exports = router;
