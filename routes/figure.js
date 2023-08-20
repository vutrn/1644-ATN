var express = require("express");
const FigureModel = require("../models/FigureModel");
const LegoModel = require("../models/LegoModel");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  var figure = await FigureModel.find();
  //  res.send(figure);
  res.render("figure/index", { figure });
});

router.get("/detail/:id", async (req, res) => {
  const figure = await FigureModel.findById(req.params.id);
  res.render("figure/detail", { figure });
});

// ----------------------------------------------------------------------------

router.get("/add", (req, res) => {
  res.render("figure/add");
});

//nhận & xử lý dữ liệu từ form ADD
router.post("/add", async (req, res) => {
  await FigureModel.create(req.body);
  res.redirect("/figure");
});

// ----------------------------------------------------------------------------

router.get("/edit/:id", async (req, res) => {
  const figure = await FigureModel.findById(req.params.id);
  res.render("figure/edit", { figure });
});

router.post("/edit/:id", async (req, res) => {
  await FigureModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/figure");
});

// ----------------------------------------------------------------------------

router.get("/delete/:id", async (req, res) => {
  await FigureModel.findByIdAndDelete(req.params.id);
  res.redirect("/figure");
});

// ----------------------------------------------------------------------------

router.post("/search", async (req, res) => {
  var keyword = req.body.keyword;
  const legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
  const figures = await FigureModel.find({ name: new RegExp(keyword, "i") });
  res.render("search-results", { legos, figures });
});

module.exports = router;
