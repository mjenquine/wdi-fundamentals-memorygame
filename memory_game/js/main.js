const cards = [
{
rank: "Queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "Queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "King",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "King",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	if (cardsInPlay.length === 2) {
	checkForMatch();
	
	
}
}

flipCard(0);
flipCard(2);











//let cards = ["queen", "queen", "king", "king"];