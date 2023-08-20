var express = require("express");
const FigureModel = require("../models/FigureModel");
const LegoModel = require("../models/LegoModel");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("figure");
});

// router.post("/search", async (req, res) => {
//   var keyword = req.body.keyword;
//   const legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
//   const figures = await FigureModel.find({ name: new RegExp(keyword, "i") });
//   res.render("search-results", { legos, figures });
// });

module.exports = router;
