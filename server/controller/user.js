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

exports.getUsers = (req, res) => {
  model.User.find({})
  .then(allUsers => {
    res.status(200).json(allUsers);
  })
  .catch(error => {
    console.error(error);
    res.status(400).json({
      message: "Error in getting user",
      error: error.message
    });
  });
};

