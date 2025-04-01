const express = require("express");
const { register, login } = require("../controllers/userControllers.js");
const validateUser = require("../middlewares/validateUser.js");

const router = express.Router();



router.post("/login", validateUser, login);
router.post("/register", validateUser, register);

module.exports = router