var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
const handlebars = require('handlebars');


//! CREATE ROUTER
var indexRouter = require("./routes/index");
var legoRouter = require("./routes/lego")
var figureRouter = require("./routes/figure")

var app = express();

//! PARTIALS
hbs.registerPartials(__dirname + "/views");

//! MONGOOSE
const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://admin:admin@umbrellacluster.rpaolls.mongodb.net/atn")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//! BODY_PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//! DATE FORMAT
// var hbs = require("hbs");
hbs.registerHelper("dateFormat", require("handlebars-dateformat"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//! USE ROUTER
app.use("/", indexRouter);
app.use("/lego", legoRouter);
app.use("/figure", figureRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.PORT || 3001);
console.log("http://localhost:3001");

module.exports = app;
