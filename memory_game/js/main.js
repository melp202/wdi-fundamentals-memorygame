//create cards array
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-heart.png"
	},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage: "image/queen-of-diamonds.png"
	},
		{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
		{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds"
	}
];

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
console.log("User flipped " + cards[cardId].rank);

// add flipped card to cardsInPlay array
cardsInPlay.push(cards[cardId].rank);

//"see" what cards have been flipped
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();

}

flipCard(0);
flipCard(2);




