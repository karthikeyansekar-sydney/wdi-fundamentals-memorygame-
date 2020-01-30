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
var cardOne = "queen";
cardsInPlay.push(cardOne);
console.log("User flipped queen");
var cardTwo = "king";
cardsInPlay.push(cardTwo);
console.log("User flipped king");
if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] == cardsInPlay[1])
{
alert("you found a match!");

}
else
{
	alert("sorry try again");

}
}
