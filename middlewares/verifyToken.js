const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

	const secretKey = process.env.JWT_SECRET;
	const token = req.headers.authorization?.split(" ")[1];
	if(!token) return res.status(401).json({ message: "Unauthorized" });

	try {

		const decoded = jwt.verify(token, secretKey);
		req.user = decoded
		next()
	} catch(err) {
		console.log(err);
		res.staus(403).json({ error: "Invalid Token" })
	}

}

module.exports = verifyToken;