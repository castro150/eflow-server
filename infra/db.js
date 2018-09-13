const mongoose = require('mongoose');
const debug = require('debug')('eflow:server:infra:db');

if (!__configs.database || !__configs.database.uri) throw new Error('Unable to connect to database: no URI config.');
mongoose.connect(__configs.database.uri, { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', err => {
	debug('Error to connect to database:\n', err.stack);
});
db.once('open', function() {
	debug('Connected to database.');
});
