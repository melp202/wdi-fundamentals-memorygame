//create cards array
var cards = ["queen", "queen", "king", "king"];

//create cards in play array
var cardsInPlay = [];

var cardOne = cards[0];

//add cardOne variable to cardsInPlay array
cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1])


//check if cardsInPlay length is 2
if(cardsInPlay.length === 2){
	// check if cards match
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match");
	} else {
		alert("Sorry try again");
	}
}

