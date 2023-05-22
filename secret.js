require("dotenv").config();

const {
	HOSTNAME: hostname,
	DB_PORT: port,
	USER: user,
	PASSWORD: password,
	DATABASE: db,
	CONNECTION_STRING: psql_uri
} = process.env;

module.exports = { hostname, port, user, password, db, psql_uri };
