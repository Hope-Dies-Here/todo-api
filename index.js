require("dotenv").config();
const express = require("express");
const conncetDb = require("./config/db.js");
const taskRoutes = require("./routes/taskRoutes.js");
const userRoutes = require("./routes/UserRoutes.js");

const app = express();
const port = process.env.PORT || 6900;

conncetDb();

app.use(express.json())

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => console.log("Server is litsening... on port", port));