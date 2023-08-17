Mongo Atlas

Mongo Compass

ExpressJS: modules/lib

npx express-generator --view=hbs

npm install

npm install -g nodemon

npm install body-parser

npm install mongoose@6.11.4 --save

npm install --save handlebars-dateformat

 view.hbs
 {{ dateFormat dob "DD/MM/YYYY" }}
(DB) app.js

   const mongoose = require('mongoose');
   mongoose.connect("");

   var hbs = require('hbs');
   hbs.registerHelper('dateFormat', require('handlebars-dateformat'))

   var bodyParser = require('body-parser');
   app.use(bodyParser.urlencoded({ extended : false}))
Route

(BE) models

(FE) views

push to github

deploy on render

lived.