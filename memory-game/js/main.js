/*console.log("Up and running!");
let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";
console.log("user flipped" + cardOne);
console.log("user flipped" + cardTwo);
console.log("user flipped" + cardThree);
console.log("user flipped" + cardFour);*/
const cards = [
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
const cardsInPlay = [];
function checkForMatch()
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		
		alert("you found a match!");
	} else {
		alert("sorry, try again.");
	}
}
function flipcard(cardId)
{
	console.log("user flipped" + " " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length === 2)
	{
	checkForMatch();
	}

}
flipcard(0);
flipcard(2);

