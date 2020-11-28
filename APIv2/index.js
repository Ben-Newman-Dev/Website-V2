const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT;
mongoose.connect(
	process.env.SRV_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log("Connected to database");
	}
);

app.listen(port, () => {
	console.log(`Sever has started on port ${port}`);
});
