//length

var tweet = prompt("Enter your tweet");
var tweetLength = tweet.length;
console.log(
  "You have written " +
    tweetLength +
    " you have " +
    (140 - tweetLength) +
    " characters remaining"
);

var tweet = prompt("Enter your tweet");
console.log(
  "You have written " +
    tweet.length +
    " you have " +
    (140 - tweet.length) +
    " characters remaining"
);

//slice
var name = "Angela";
name.slice(0, 3);

var tweet = prompt("Enter your tweet");
console.log(tweet.slice(0, 139));

console.log(prompt("Enter your tweet").slice(0, 139));

//casing

var name = prompt("Enter your name");
firstLetter = name.slice(0, 1);
var lastLetters = name.slice(1, name.length);
alert(firstLetter.toUpperCase() + lastLetters.toLowerCase());

//numbers

//functions

function getMilk() {
  alert("leaveHouse");
}

getMilk();
