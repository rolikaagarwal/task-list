const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/task");
const userRouter = require("./routes/user");
const jwt = require("jsonwebtoken");
const app = express();

// middlewares
app.use((req,res,next)=>{
   const token = req.get('Authorization').split('Bearer ')[1];
   console.log(token);
  //  console.log(process.env.SECRET)
    // console.log(req.body.email);
  
     var decoded = jwt.verify(token, process.env.SECRET);
     console.log(decoded)
     if(decoded.email){
      next()
     }
     else{
      res.sendStatus(401);
     }
})
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
