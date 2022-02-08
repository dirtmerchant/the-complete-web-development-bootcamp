// $(document).ready(function () {
//   alert("Working");
// });

const buttonColours = ["red", "blue", "green", "yellow"];

const gamePattern = [];


function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  // alert(randomNumber);
  // console.log(randomNumber);
  const randomChosenColor = buttonColours[randomNumber];
  // console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
  //console.log(gamePattern);
}

//nextSequence();
