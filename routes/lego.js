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

// ----------------------------------------------------------------------------

router.get("/add", (req, res) => {
  res.render("lego/add");
});

//nhận & xử lý dữ liệu từ form ADD
router.post("/add", async (req, res) => {
  await LegoModel.create(req.body);
  res.redirect("/lego");
});

// ----------------------------------------------------------------------------

router.get("/edit/:id", async (req, res) => {
  const lego = await LegoModel.findById(req.params.id);
  res.render("lego/edit", { lego });
});

router.post("/edit/:id", async (req, res) => {
  await LegoModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/lego");
});

// ----------------------------------------------------------------------------

router.get("/delete/:id", async (req, res) => {
  await LegoModel.findByIdAndDelete(req.params.id);
  res.redirect("/lego");
});

// ----------------------------------------------------------------------------

router.post("/search", async (req, res) => {
  var keyword = req.body.keyword;
  const legos = await LegoModel.find({ name: new RegExp(keyword, "i") });
  const figures = await FigureModel.find({ name: new RegExp(keyword, "i") });
  res.render("search-results", { legos, figures });
});

module.exports = router;
