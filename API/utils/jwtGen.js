const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGen(data) {
	const payload = data;
	return jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: `${process.env.JWT_EXPIRE}hr`,
	});
}

module.exports = jwtGen;
