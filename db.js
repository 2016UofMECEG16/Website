var pool = require('mysql').createPool({
	connectionLimit: 50,
	host: "localhost",
	user: "web",
	password: "Capstone2015Web",
	database: "projectdb"
});

module.exports = pool;