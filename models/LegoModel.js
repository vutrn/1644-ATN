const mongoose = require("mongoose");

var LegoSchema = mongoose.Schema({
  name: String,
  dob: Date,
  gender: String,
  department: String,
  class: String,
  image: String,
  gpa: Number,
  studentYear: Number,
});

//* model('ten-tuỳ-ý', 'schema', 'collection')
module.exports = mongoose.model("lego", LegoSchema, "lego");
