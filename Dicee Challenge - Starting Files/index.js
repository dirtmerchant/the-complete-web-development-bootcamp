let randomNumber1 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".dice .img1")
  .setAttribute("src", `images/\dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".dice .img2")
  .setAttribute("src", `images/\dice${randomNumber2}.png`);

if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").innerHTML = "🚩Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".heading").innerHTML = "Player 2 Wins🚩";
}
else {
    document.querySelector(".heading").innerHTML = "🚩Draw🚩";
}