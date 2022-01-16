// let randomResult = getRandomNumber();

// function getRandomNumber() {
//   let randomNumber1 = Math.random();
//   randomNumber1 = randomNumber1 * 6;
//   randomNumber1 = Math.floor(randomNumber1) + 1;
  
//   return randomNumber1;
// }
// console.log(randomResult)

let randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".dice .img1").setAttribute("src", `images/\dice${randomNumber1}.png`);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".dice .img2").setAttribute("src", `images/\dice${randomNumber2}.png`);

//let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//document.querySelector(".dice .img2").setAttribute("src", `images/\dice${randomNumber1}.png`);

