const mongoose = require("mongoose");

const conncetDb = async () => {
	try {

		await mongoose.connect(process.env.DB_URL)
		console.log("Database Connected");
	} catch (e) {
		console.log("error connecting to the db: ", e.message);
		console.log();
		console.log("------------------------------------------");
		console.log("So basically database is not connected!!!");
		process.exit(1);
	}

}

module.exports = conncetDb