const express = require("express");
const router = express.Router();
const taskController = require("../controller/task") 

router
.post("/", taskController.createTask)
.get("/",taskController.getTask)
.delete("/:id",taskController.deleteTask)
.put("/:id",taskController.updatedTask)

exports.router = router;