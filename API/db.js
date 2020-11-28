require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
	user: process.env.DB_USR,
	password: process.env.DB_PWD,
	host: process.env.DB_HST,
	database: process.env.DB_DAT,
});

module.exports = pool;
