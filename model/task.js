const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  item: String,
});
exports.Item = mongoose.model("Item", itemsSchema);
