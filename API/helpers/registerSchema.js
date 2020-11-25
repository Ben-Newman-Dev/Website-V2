const Joi = require("joi");

const registerSchema = Joi.object({
	name: Joi.string().alphanum().min(3).max(30).required(),
	password: Joi.string().min(6).max(30).required(),
	email: Joi.string().email().max(30).required(),
});

module.exports = registerSchema;
