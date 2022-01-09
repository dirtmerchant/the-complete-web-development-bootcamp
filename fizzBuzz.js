//iterates through a list of 100 numbers

for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

//takes input from user at fizzes

let fizzBuzz = prompt("Please enter a number");
if (fizzBuzz % 15 == 0) {
  console.log("FizzBuzz");
}
if (fizzBuzz % 3 == 0) {
  console.log("fizz");
}
if (fizzBuzz % 5 == 0) {
  console.log("buzz");
} else {
  console.log(fizzBuzz);
}

//builds an array

var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  }
  else if (count % 3 === 0) {
    output.push("Fizz");
  }
  else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
