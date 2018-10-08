let express = require('express');
let router = express.Router();

let usersRouter = require('./users');

module.exports = function (app) {
	// GET home page.
	router.get('/', function(req, res) {
		res.send('EFlow Server is running!');
	});

	app.use('/', router);
	app.use('/users', usersRouter);
};
