var express = require("express");
const LegoModel = require('../models/LegoModel');
var router = express.Router();

router.get("/", async (req, res) => {
  var lego = await LegoModel.find();
  res.send(lego); 
  // res.render("student/studentList", { students });
});

module.exports = router;
