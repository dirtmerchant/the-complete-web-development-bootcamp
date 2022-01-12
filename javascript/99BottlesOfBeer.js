var bottles = 99
function beer() {
  while (bottles >= 1) {
    console.log(
      bottles +
        " bottles of beer on the wall." +
        bottles +
        " bottles of beer on the wall. Take one down, pass it around. ")
        bottles--;
        console.log( bottles+
        "bottles of beer on the wall.")

    count--;
    console.log(bottles + " bottles of beer on the wall.")
  }
  console.log(bottles + " bottle of beer on the wall.")
  console.log("No more bottles of beer on the wall.");
}


var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}