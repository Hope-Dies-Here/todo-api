const express = require("express");
const verifyToken = require("../middlewares/verifyToken.js");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskControllers.js");

const router = express.Router();

router.get("/", verifyToken, getTasks);
router.post("/", verifyToken, createTask);
router.put("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

module.exports = router;