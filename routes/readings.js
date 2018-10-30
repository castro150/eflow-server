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

// GET actual reading.
router.get('/actual', function (req, res, next) {	
	Reading
		.find()
		.sort({'date': -1}).limit(1)
		.exec(function (err, readings) {
			if (err) return next(err);
			return res.json(readings[0]);
		});
});

// GET consumption history.
router.get('/history', function (req, res, next) {
	if (!req.query.year) req.query.year = (new Date().getYear() + 1900).toString();
	let year = req.query.year;
	Reading
		.aggregate([
			{ $match: { date: {
				$gte: new Date(year),
				$lt: new Date((+year + 1).toString())
			}}},
			{ $group: {
				_id: { month: { $month: '$date' } },
				totalConsumption: { $max: '$consumption' },
				count: { $sum: 1 }
			}}
		])
		.exec(function (err, readings) {
			if (err) return next(err);
			return res.json(readings);
		});
});

module.exports = router;
