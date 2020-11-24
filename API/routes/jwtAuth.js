const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGen = require("../utils/jwtGen");
require("dotenv").config();

//register
router.post("/register", async (req, res) => {
	try {
		//1. destructure req.body
		const { name, email, password, website } = req.body;

		//2. check if user exists if true, throw err
		const user = await pool.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);

		if (user.rows.length !== 0) {
			return res.status(401).send("User Already Exists");
		}
		//3. Bcrypt password
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);

		const cryptPass = await bcrypt.hash(password, salt);

		//4. write new user to db

		const defaultPermissions = {
			createProject: false,
			deleteProject: false,
			editProject: false,
			createPost: false,
			deletePost: false,
			editPost: false,
			createComment: true,
			deleteComment: false,
			editComment: false,
		};

		const newUser = await pool.query(
			"INSERT INTO users(name, email, password, permissions) VALUES ($1, $2, $3, $4) RETURNING *",
			[name, email, cryptPass, defaultPermissions]
		);
		//5. generate jwt token
		const payload = {
			id: newUser.rows[0].id,
			perms: newUser.rows[0].permissions,
		};
		const token = jwtGen(payload);

		res.set("token", token).send("User created successfully!");
		//
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

//login route
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await pool.query("SELECT * FROM users WHERE email = $1", [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).send("Invalid email or password");
		}

		const validPass = await bcrypt.compare(password, user.rows[0].password);
		if (!validPass) {
			return res.status(401).send("Invalid email or password");
		}

		const payload = {
			id: user.rows[0].id,
			perms: user.rows[0].permissions,
		};
		const token = jwtGen(payload);

		res.set("token", token).send("Login Successful!");
		//
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
