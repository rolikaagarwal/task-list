const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");
const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/tasklistDB")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.use("/task", taskRouter.router);
app.use("/user", userRouter.router);
// listening on port

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
