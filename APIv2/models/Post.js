const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
	title: String,
	author: String,
	content: String,
	timeCreated: Number,
});
