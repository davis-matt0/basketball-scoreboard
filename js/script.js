let homeScoreElement = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

let homePlusOne = document.getElementById("home-plus-one");
let homePlusTwo = document.getElementById("home-plus-two");
let homePlusThree = document.getElementById("home-plus-three");

let guestPlusOne = document.getElementById("guest-plus-one");
let guestPlusTwo = document.getElementById("guest-plus-two");
let guestPlusThree = document.getElementById("guest-plus-three");

let newGame = document.getElementById("new-game");

homePlusOne.addEventListener("click", () => {
  homeScore += 1;
  homeScoreElement.textContent = homeScore;
});

homePlusTwo.addEventListener("click", () => {
  homeScore += 2;
  homeScoreElement.textContent = homeScore;
});

homePlusThree.addEventListener("click", () => {
  homeScore += 3;
  homeScoreElement.textContent = homeScore;
});

guestPlusOne.addEventListener("click", () => {
  guestScore += 1;
  guestScoreElement.textContent = guestScore;
});

guestPlusTwo.addEventListener("click", () => {
  guestScore += 2;
  guestScoreElement.textContent = guestScore;
});

guestPlusThree.addEventListener("click", () => {
  guestScore += 3;
  guestScoreElement.textContent = guestScore;
});

newGame.addEventListener("click", () => {
  homeScoreElement.textContent = 0;
  guestScoreElement.textContent = 0;
});
