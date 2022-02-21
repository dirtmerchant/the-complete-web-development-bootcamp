//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post("/", function (req, res) {
  console.log(req.body.num1);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Result " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
  console.log(__dirname);
});

app.post("/bmicalculator", function (req, res) {
  height = parseFloat(req.body.height);
  weight = parseFloat(req.body.weight);

  var bmi = weight / (height * height);

  // CONDITION FOR BMI
  if (bmi < 19) {
    res.send("Your BMI is " + bmi + ", so you are underweight.");
  } else if (19 <= bmi && bmi < 25) {
    res.send("Your BMI is " + bmi + ", so you have a normal weight.");
  } else if (25 <= bmi && bmi < 30) {
    res.send("Your BMI is " + bmi + ", so you are overweight.");
  } else {
    res.send("Your BMI is " + bmi + ", so you are obese.");
  }
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});