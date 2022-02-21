//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html")
  console.log(__dirname);
});

app.post("/", function (req, res) {

  console.log(req.body.num1);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Result " + result);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
