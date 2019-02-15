//create cards array
var cards = ["queen", "queen", "king", "king"];

//create cards in play array
var cardsInPlay = [];

function checkForMatch(){
	//check if cardsInPlay length is 2
if(cardsInPlay.length === 2){
	// check if cards match
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match");
	} else {
		alert("Sorry try again");
	}
}
}

function flipCard(cardId){
console.log("User flipped " + cards[cardId]);

// add flipped card to cardsInPlay array
cardsInPlay.push(cards[cardId]);

checkForMatch();

}

flipCard(0);
flipCard(2);



