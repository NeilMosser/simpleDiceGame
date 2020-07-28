//Create random number for die 1

var randomNumber1 = (Math.random() *6) + 1;  //1-6
randomNumber1 = Math.floor(randomNumber1); //round down

//create string for new dice 1 image source
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;

//set dice 1 image source
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

//Create random number for die 2, set die 2 image source, set new source
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Winner Display

if(randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else {
document.querySelector("h1").innerHTML = "It's a Draw!";
}
