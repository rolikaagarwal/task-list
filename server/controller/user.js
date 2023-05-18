const env = require("dotenv").config();
const model = require("../model/user");


exports.getUsers = (req, res) => {
  model.User.find({})
    .then((allUsers) => {
      res.status(200).json(allUsers);
    })
    .catch((error) => {
      console.error(error);
      res.status(400).json({
        message: "Error in getting user",
        error: error.message,
      });
    });
};
