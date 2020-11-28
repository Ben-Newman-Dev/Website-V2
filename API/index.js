const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//ROUTES

//register and login
app.use("/auth", require("./routes/jwtAuth"));

app.listen(5000, () => {
	console.log("Server listening on port 5000");
});
