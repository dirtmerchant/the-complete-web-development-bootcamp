app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
  console.log(__dirname);
});

app.post("/bmicalculator", function (req, res) {

  //console.log(req.body.num1);

  var height = Number(req.body.height);
  var weight = Number(req.body.weight);

  function bmiCalculator(weight, height) {
    //The first parameter should be the weight and the second should be the height.
  
    var bmi = weight / Math.pow(height, 2);
  
    return Math.round(bmi);
  }

  var bmi = bmiCalculator(65, 1.8);

  res.send("Your BMI is " + bmi);
  
});