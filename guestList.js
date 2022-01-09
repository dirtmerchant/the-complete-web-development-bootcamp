var guestList = ["Bert", "Tina", "Amber", "Eli", "Nyssa", "Devin"];
let attendee = prompt("Please enter your name");
if (guestList.includes(attendee)) {
  "Hello " + attendee + "Please leave your coat at the door.";
} else {
  "Security! Please escort " + attendee + "to the dungeon!";
}