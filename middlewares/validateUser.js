const { body, validationResult } = require("express-validator");
const User = require("../models/User.js");

const validateUser = [
	body("name")
		.trim()
		.notEmpty().withMessage("Name is required"),
	body("email")
		.trim()
		.notEmpty().withMessage("Email is required")
		.isEmail().withMessage("Invalid email format.")
    	.normalizeEmail()
		.custom(async (value) => {
			
			const exisitingUser = await User.findOne({ email: value });
			if(exisitingUser) {
				throw new Error("This email is already registered")
			}

			return true
		}),
	body("password")
		.trim()
		.notEmpty().withMessage("password is required")
		.isLength({ min: 6, max: 32 }).withMessage("Password must be between 6 and 32 characters"),

		// to return error if the validation faild
		(req, res, next) => {
			const errors = validationResult(req);
			if(!errors.isEmpty) {

				return res.status(400).json({ success: false, errors: errors.array() });
			}

			next();
		}
]

module.exports = validateUser