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

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
	const cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
}
}
createBoard();

function flipCard() {
	const cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();	
}
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
}
}