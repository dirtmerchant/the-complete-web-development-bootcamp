//const firstPlayer = prompt("First Player - What is your name?");
//const secondPlayer = prompt("Second Player - What is your name?");
//for (let i = 0; i < 1; i++) {

//const secondPlayer = prompt("Second Player - What is your name?");

//prompt for dice type
//prompt for number of dice

var n = Math.random();
n = n * 20;
n = Math.floor(n) + 1;
//console.log(n);

if (n === 20) {
  console.log("Natural " + n );
}
if (n === 1) {
    console.log("Fumble!");
}
else console.log(n);

//}
//console.log(firstPlayer + " is " + n + " % compatible with " + secondPlayer);
