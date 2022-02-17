var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;

// 2. Create a new variable called level and start at level 0.

var level = 0;

// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().

$(document).keypress(function () {
  if (!started) {
    // 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".

    $("#level-title").text("Level " + level);

    nextSequence();

    // You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.

    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);

  // console.log(userClickedPattern);

  playSound(userChosenColor);
  animatePress(userChosenColor);
});

function nextSequence() {
  // 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.

  level++;

  // 5. Inside nextSequence(), update the h1 with this change in the value of level.

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);

  console.log(level);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
