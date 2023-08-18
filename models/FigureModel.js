const mongoose = require("mongoose");

var FigureSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  image: String,
  category: String,
  description: String,
});

//* model('ten-tuỳ-ý', 'schema', 'collection')
module.exports = mongoose.model("figure", FigureSchema, "figure");
