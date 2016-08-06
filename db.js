var pg = require('pg');
var pgURL = '';
var _db;

// connect to DB
module.exports = {
	connect: function(cb){
		if (_db) {
			return cb(_db);
		}
		var client = new pg.Client(process.env.CONN);
		client.connect(function(err, conn){
			if (err) throw err;
				_db = conn;
				cb(_db);
			})
		 }
};
