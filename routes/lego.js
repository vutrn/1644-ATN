var express = require("express");
const FigureModel = require("../models/FigureModel");
const LegoModel = require("../models/LegoModel");
var router = express.Router();

router.get("/", async (req, res) => {
  var lego = await LegoModel.find();
  // res.send(lego);
  res.render("lego/index", { lego });
});

router.get("/detail/:id", async (req, res) => {
  const lego = await LegoModel.findById(req.params.id);
  res.render("lego/detail", { lego });
});

router.post("/search", async (req, res) => {
  var keyword = req.body.keyword;
  const legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
  const figures = await FigureModel.find({ name: new RegExp(keyword, "i") });
  res.render("search-results", { legos, figures });
});

module.exports = router;
