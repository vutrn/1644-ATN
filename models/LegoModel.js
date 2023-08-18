const mongoose = require("mongoose");

var LegoSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  category: String,
  description: String,
});

//* model('ten-tuỳ-ý', 'schema', 'collection')
module.exports = mongoose.model("lego", LegoSchema, "lego");
