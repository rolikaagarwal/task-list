const model = require("../model/user");

exports.createUser = async (req, res) => {
  const user = new model.User(req.body);
  try {
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
};
