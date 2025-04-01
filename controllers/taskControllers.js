const Task = require("../models/Task.js");

// get list of tasks
const getTasks = async (req, res) => {
	try {

		const tasks = await Task.find({ creator: req.user.email }); //get tasks/todos only the current logged user created

		if(!tasks || tasks.length == 0) {
			return res.status(404).json({ message: "No tasks available" }) 
		}

		res.status(200).json(tasks);
	} catch(err) {
		console.log(err.message)
		res.status(500).json({ error: err.message })
	}
}

const createTask = async (req, res) => {
	
	try {

		const { title, description } = req.body;

		if(!title) {
			return res.json({ message: "Title is required" });
		}

		if(!description) {
			return res.json({ message: "Description is required" });
		}
		
		const newTask = new Task ({ title, description, creator: req.user.email });
		const data = newTask.save();

		res.status(201).json({ message: "Task created" });
	} catch(err) {
		console.log(err.message)
		res.status(500).json({ error: err.message })
	}
}

const updateTask = async (req, res) => {

	try {

		const newData = req.body;

		if(!newData) {
			return res.status(400).json({ error: "Did you send empty data to update?" });
		}

		if(newData.creator) {
			return res.status(403).json({ error: "You can't cange the creator!" });
		}

		const task = await Task.findOne({ _id: req.params.id }); 
		if(task.creator !== req.user.email) {
			return res.status(403).json({ message: "Forbidden" })
		}

		const updatedTask = await Task.findByIdAndUpdate(req.params.id, newData, { new: true });

		res.status(200).json(updatedTask);
	} catch(err) {
		console.log(err)
		res.status(500).json({ error: err.message });
	}
}

const deleteTask = async (req, res) => {

	try {

		const task = await Task.findOne({ _id: req.params.id }); 	
		if(task.creator !== req.user.email) {
			return res.status(403).json({ message: "Forbidden" })
		}

		await Task.findByIdAndDelete(req.params.id);
		res.status(200).json({ message: "Task Deleted" });
	} catch(err) {
		console.log(err)
		res.status(500).json({ error: err.message });
	}
}

module.exports = { getTasks, createTask, updateTask, deleteTask };