/*console.log("Up and running!");
let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";
console.log("user flipped" + cardOne);
console.log("user flipped" + cardTwo);
console.log("user flipped" + cardThree);
console.log("user flipped" + cardFour);*/
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
function checkForMatch()
{
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		console.log("you found a match!");
	} else {
		console.log("sorry, try again.");
	}
}
function flipcard(x)
{
		console.log("user flipped" + " " + cards[x]);
	
	cardsInPlay.push(cards[x]);
	checkForMatch();
	

}
flipcard(0);
flipcard(2);

