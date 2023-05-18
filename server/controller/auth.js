const jwt = require("jsonwebtoken");
const model = require("../model/user");

exports.createUser = async (req, res) => {
  const user = new model.User(req.body);
  const token = jwt.sign({ email: req.body.email }, process.env.SECRET);
  user.token = token;
  try {
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};