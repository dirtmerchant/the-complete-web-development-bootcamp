function getMilk(money, costPerbottle) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy " + calcBottles(money, costPerbottle) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, costPerbottle);
}

function calcBottles(startingMoney, costPerbottle) {
  var numberOfBottles = Math.floor(startingMoney / costPerbottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerbottle) {
  var change = startingAmount % costPerbottle;
  return change;
}
console.log("Hello master, here is your " + getMilk(15, 3) + " change.");
