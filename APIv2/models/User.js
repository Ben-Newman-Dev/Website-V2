const mongoose = require("mongoose");

const schema = mongoose.Schema({
	email: String,
	password: String,
	name: String,
	joinedAt: Number,
	permissions: [String],
	comments: [],
});

module.exports = mongoose.model("User", schema);
