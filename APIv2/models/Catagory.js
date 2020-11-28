const mongoose = require("mongoose");

const schema = mongoose.Schema({
	title: String,
	description: String,
	dateCreated: Number,
	posts: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Post",
		},
	],
});

module.exports = mongoose.model("User", schema);
