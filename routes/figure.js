var express = require("express");
const FigureModel = require("../models/FigureModel");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  var figure = await FigureModel.find();
  // res.send(figure);
  res.render("figure/index", { figure });
});

router.get('/detail/:id', async (req, res) => {
  const figure = await FigureModel.findById(req.params.id);
  res.render('figure/detail', { figure });
})

module.exports = router;
