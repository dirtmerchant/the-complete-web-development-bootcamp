function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

function bmiLogic(bmi) {
  if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underweight.");
  }
  if (bmi < 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a normal weight.");
  }
  if (bmi > 24.9) {
    console.log("Your BMI is " + bmi + ", so you are overweight.");
  }
}

bmiCalculator(65, 1.8);
