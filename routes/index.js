let express = require('express');
let router = express.Router();

let readingsRouter = require('./readings');

module.exports = function (app) {
	// GET home page.
	router.get('/', function(req, res) {
		res.send('EFlow Server is running!');
	});

	app.use('/', router);
	app.use('/readings', readingsRouter);
};
