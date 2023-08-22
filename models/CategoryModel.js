const mongoose = require("mongoose");

var CategorySchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model("category", CategorySchema, "category");