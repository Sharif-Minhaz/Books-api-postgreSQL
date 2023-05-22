const { Pool } = require("pg");
const { hostname, user, password, port, db, psql_uri } = require("./secret");

const pool = new Pool({
	host: hostname,
	user,
	password,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 2000,
	port,
	database: db,
});

// const pool = new Pool({
// 	connectionString: psql_uri,
// });

// pool.query("SELECT NOW()", (err, res) => {
// 	console.log(err, res);
// 	pool.end();
// });

module.exports = pool;
