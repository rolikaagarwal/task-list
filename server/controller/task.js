const model = require("../model/task");

exports.createTask = async (req, res) => {
  const task = new model.Item(req.body);
  try {
    const newTask = await task.save();
    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getTask = async (req, res) => {
  try {
    const allTasks = await model.Item.find();
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await model.Item.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteTask);
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.updatedTask = async (req, res) => {
  try {
    const updateTask = await model.Item.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(400).json(err);
  }
};
