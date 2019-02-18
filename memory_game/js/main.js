//create cards array
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
		{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
		{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
		{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

	//create cards in play array
var cardsInPlay = [];


function checkForMatch(){

		if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match");
	} else {
		alert("Sorry try again");
	}

};

// create a function to flip cards
function flipCard(){

var cardId = this.getAttribute('data-id');

// console.log("User flipped " + cards[cardId].rank);

// add flipped card to cardsInPlay array
cardsInPlay.push(cards[cardId].card);

// display card image
this.setAttribute('src', cards[cardId].cardImage);


//check if cardsInPlay length is 2
if(cardsInPlay.length === 2){
	checkForMatch();

}

};


// create a game board
function createBoard(){
	for(var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}



createBoard();




