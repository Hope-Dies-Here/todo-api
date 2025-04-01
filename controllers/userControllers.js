const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const register = async (req, res) => {

	try {
		if(!req.body) return res.status(400).json({ message: "Seriously ?" })

		const { name, email, password } = req.body;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = new User({ name, email, password: hashedPassword })
		await newUser.save();

		res.status(201).json({ message: "User created succesfully" })
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: err.message })
	}
}

const login = async (req, res) => {
	try {

		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if(!user) {
			return res.status(404).json({ message: "No user exists with this email" });
		}

		const match = await bcrypt.compare(password, user.password);
		if(!match) {
			return res.status(400).json({ message: "Incorrect passsword" });
		}

		const data = { name: user.name, email: user.email };
		const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "69m" })

		res.status(200).json({ message: "User logged in.", token });
	} catch(err) {
		console.log(err)
		res.status(500).json({ message: err.message })
	}
}

module.exports = { register, login };