var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomno1 + ".png";
var randomImageSource = "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "dice" + randomno2 + ".png";
var randomImageSource2 = "images/" + randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomno1 > randomno2) {
  document.querySelector("h1").innerHTML = "  Player 1 wins";
} else if (randomno1 < randomno2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
