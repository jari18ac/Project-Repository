//We make an empty array for later use 
var used_cards = new Array();
// This counts the amount of correct guesses
var rights = 0
//This variable enables us to disable the button after first use
var clicked = 0;

//We define a function called card and set three parameters
	function card(name,suit,value) {
		this.name = name;
		this.suit = suit;
		this.value = value;
    } 
	//We add cards to our deck
	var deck = [
		new card('Ace', 'Hearts',1),
		new card('Two', 'Hearts',2),
		new card('Three', 'Hearts',3),
		new card('Four', 'Hearts',4),
		new card('Five', 'Hearts',5),
		new card('Six', 'Hearts',6),
		new card('Seven', 'Hearts',7),
		new card('Eight', 'Hearts',8),
		new card('Nine', 'Hearts',9),
		new card('Ten', 'Hearts',10),
		new card('Jack', 'Hearts',11),
		new card('Queen', 'Hearts',12),
		new card('King', 'Hearts',13),
		new card('Ace', 'Diamonds',1),
		new card('Two', 'Diamonds',2),
		new card('Three', 'Diamonds',3),
		new card('Four', 'Diamonds',4),
		new card('Five', 'Diamonds',5),
		new card('Six', 'Diamonds',6),
		new card('Seven', 'Diamonds',7),
		new card('Eight', 'Diamonds',8),
		new card('Nine', 'Diamonds',9),
		new card('Ten', 'Diamonds',10),
		new card('Jack', 'Diamonds',11),
		new card('Queen', 'Diamonds',12),
		new card('King', 'Diamonds',13),
		new card('Ace', 'Clubs',1),
		new card('Two', 'Clubs',2),
		new card('Three', 'Clubs',3),
		new card('Four', 'Clubs',4),
		new card('Five', 'Clubs',5),
		new card('Six', 'Clubs',6),
		new card('Seven', 'Clubs',7),
		new card('Eight', 'Clubs',8),
		new card('Nine', 'Clubs',9),
		new card('Ten', 'Clubs',10),
		new card('Jack', 'Clubs',11),
		new card('Queen', 'Clubs',12),
		new card('King', 'Clubs',13),
		new card('Ace', 'Spades',1),
		new card('Two', 'Spades',2),
		new card('Three', 'Spades',3),
		new card('Four', 'Spades',4),
		new card('Five', 'Spades',5),
		new card('Six', 'Spades',6),
		new card('Seven', 'Spades',7),
		new card('Eight', 'Spades',8),
		new card('Nine', 'Spades',9),
		new card('Ten', 'Spades',10),
		new card('Jack', 'Spades',11),
		new card('Queen', 'Spades',12),
		new card('King', 'Spades',13)
	];
	
	//We start the game
function startGame(){
    var random = Math.floor(Math.random() * deck.length);
    //this variable selects a radom card from the deck
	var draw = deck[random];
	   //We show the result
	   document.getElementById("cardResult").innerHTML = ("<img src=images/cards/"+draw.suit+"/"+draw.name+".jpg>")
	//Adds 1 to clicked
	clicked++;
	//Disable button statement: After clicking 'start game' the draw button disables and draw2 + draw3 enables
	if (clicked > 0) 
	document.getElementById("draw").disabled=true;
	document.getElementById("draw2").disabled=false;
	document.getElementById("draw3").disabled=false;
	   //We push the drawn card into the array used.cards for later use 
	   used_cards.push(draw);
	//we use splice to remove the randomly drawn card from the array
	deck.splice(random, 1);
}
//We create a function to both the higher and lower button
function Higher(){
	//We yet again select a random card from the deck
var random2 = Math.floor(Math.random() * deck.length);
var draw2 = deck[random2];

// THE OLD VERSION: document.getElementById("cardResult").innerHTML = draw2.name + ' ' + draw2.suit; 
// New version: Adds the picture to the draw
document.getElementById("cardResult").innerHTML = ("<img src=images/cards/"+draw2.suit+"/"+draw2.name+".jpg>")


//We compare the new drawn card's value to the newest card in the used.cards array
if (draw2.value > used_cards[0].value){
	//We add one to the variable rights and tell the user how many correct guesses they have 
	rights++;
	document.getElementById("Guess").innerHTML = ("Correct! You now have "+rights+" correct guesses");
	
	//We check whether the user have won yet
if (rights == 5) {
	// I got it to work by moving the "disabled=false above the "you are the champion"
	document.getElementById("draw").disabled=false;
	document.getElementById("Guess").innerHTML = ("YOU ARE THE CHAMPION");
	document.getElementById("draw2").disabled=true;
	document.getElementById("draw3").disabled=true;
}

}else if (draw2.value < used_cards[0].value){
	//We reset the variable 'rights' when the guess is wrong
	rights = 0;
	document.getElementById("Guess").innerHTML = ("Wrong! You now have "+rights+" correct guesses");	
}
//we delete the current card in the used.cards array and push the newly drawn card in there instead
used_cards.splice(0,1);
used_cards.push(draw2);
deck.splice(random2, 1);
}
	  //The 'Lower' function is the same as Higher - just the other way around 
function Lower(){
	var random2 = Math.floor(Math.random() * deck.length);
	var draw2 = deck[random2];
	document.getElementById("cardResult").innerHTML = ("<img src=images/cards/"+draw2.suit+"/"+draw2.name+".jpg>")
	if (draw2.value < used_cards[0].value){
		rights++;
		document.getElementById("Guess").innerHTML = ("Correct! You now have "+rights+" correct guesses");
	if (rights == 5) {
	
		document.getElementById("draw").disabled=false;
		document.getElementById("Guess").innerHTML = ("YOU ARE THE CHAMPION");
		document.getElementById("draw2").disabled=true;
		document.getElementById("draw3").disabled=true;
	}

	}else if (draw2.value > used_cards[0].value){
		rights = 0;
		document.getElementById("Guess").innerHTML = ("Wrong! You now have "+rights+" correct guesses");
		
	}
	used_cards.splice(0,1);
used_cards.push(draw2); 
deck.splice(random2, 1);
}

	console.log(used_cards);
console.log(deck);