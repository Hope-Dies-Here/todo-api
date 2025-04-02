const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true 
	},
	email: { 
		type: String,
		required: [true, "Email is required"], 
		unique: true,
	    trim: true,
    	match: [/^\S+@\S+\.\S+$/, "Invalid email format."],
	},
	password: { 
		type: String, 
		required: [true, "Password is required"],
		minlength: [6, "Password must be at least 6 characters long"],
	},
})

// userSchema.pre("save", async(next) => {
// 	const salt = await bcrypt.genSalt(10);
// 	console.log(salt)
// 	this.password = await bcrypt.hash(this.password, salt);
// 	next();
// })

module.exports = mongoose.model("User", userSchema);