var gamePattern = [];

var buttonColors = ["red","blue","green","yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
}


