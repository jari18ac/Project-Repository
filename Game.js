if (localStorage.getItem('status', 'loggedIn')) {

	//We make an empty array for later use 
	var used_cards = new Array();
	// This counts the amount of correct guesses
	var rights = 0;
	// create a variable to count wrongs, and link to the beer image
	var beer = 1;
	var beerlimit = 7;
	//This variable enables us to disable the button after first use
	var clicked = 0;
	var getPlayThrough = JSON.parse(localStorage.getItem('playThrough'));
	var TotalGuesses = +getPlayThrough[0].guesses
	var TotalCorrectGuesses = +getPlayThrough[0].correctGuesses
	console.log(TotalGuesses, TotalCorrectGuesses);
	
	
	//We define a function called card and set three parameters
		class Card{
			constructor(name,suit,value) {
				this.name = name;
				this.suit = suit;
				this.value = value;
		} 
	}
		//We add cards to our deck
		var deck = [
			new Card('Ace', 'Hearts',1),
			new Card('Two', 'Hearts',2),
			new Card('Three', 'Hearts',3),
			new Card('Four', 'Hearts',4),
			new Card('Five', 'Hearts',5),
			new Card('Six', 'Hearts',6),
			new Card('Seven', 'Hearts',7),
			new Card('Eight', 'Hearts',8),
			new Card('Nine', 'Hearts',9),
			new Card('Ten', 'Hearts',10),
			new Card('Jack', 'Hearts',11),
			new Card('Queen', 'Hearts',12),
			new Card('King', 'Hearts',13),
			new Card('Ace', 'Diamonds',1),
			new Card('Two', 'Diamonds',2),
			new Card('Three', 'Diamonds',3),
			new Card('Four', 'Diamonds',4),
			new Card('Five', 'Diamonds',5),
			new Card('Six', 'Diamonds',6),
			new Card('Seven', 'Diamonds',7),
			new Card('Eight', 'Diamonds',8),
			new Card('Nine', 'Diamonds',9),
			new Card('Ten', 'Diamonds',10),
			new Card('Jack', 'Diamonds',11),
			new Card('Queen', 'Diamonds',12),
			new Card('King', 'Diamonds',13),
			new Card('Ace', 'Clubs',1),
			new Card('Two', 'Clubs',2),
			new Card('Three', 'Clubs',3),
			new Card('Four', 'Clubs',4),
			new Card('Five', 'Clubs',5),
			new Card('Six', 'Clubs',6),
			new Card('Seven', 'Clubs',7),
			new Card('Eight', 'Clubs',8),
			new Card('Nine', 'Clubs',9),
			new Card('Ten', 'Clubs',10),
			new Card('Jack', 'Clubs',11),
			new Card('Queen', 'Clubs',12),
			new Card('King', 'Clubs',13),
			new Card('Ace', 'Spades',1),
			new Card('Two', 'Spades',2),
			new Card('Three', 'Spades',3),
			new Card('Four', 'Spades',4),
			new Card('Five', 'Spades',5),
			new Card('Six', 'Spades',6),
			new Card('Seven', 'Spades',7),
			new Card('Eight', 'Spades',8),
			new Card('Nine', 'Spades',9),
			new Card('Ten', 'Spades',10),
			new Card('Jack', 'Spades',11),
			new Card('Queen', 'Spades',12),
			new Card('King', 'Spades',13)
		];
		
		//We create a array called playThrough to update the values within the localstorage
	 playThrough = [];
	
		//We start the game
	function startGame(){
		var random = Math.floor(Math.random() * deck.length);
		//this variable selects a random card from the deck
		var draw = deck[random];
		   //We show the result
		   document.getElementById("cardResult").innerHTML = ("<img src=images/cards/"+draw.suit+"/"+draw.name+".jpg>")
		//Adds 1 to clicked
		clicked++;
		//Disable button statement: After clicking 'start game' the draw button disables and draw2 + draw3 enables
		if (clicked > 0) 
		document.getElementById("reload").disabled=true;
		document.getElementById("draw2").disabled=false;
		document.getElementById("draw3").disabled=false;
	//(For when game is restarted after 5 correct) We splice the array with used cards to avoid the latest card from the previous game to be taken into account
		   used_cards.splice(0,1);
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
	console.log(draw2);

	if (beer == beerlimit) { 
		beer = 1;
	} 
	
	if (deck.length === 0) {
		window.alert("You ran out of cards! Try again")
		location.reload();
	}

	// Adds the picture to the draw
	document.getElementById("cardResult").innerHTML = ("<img src=images/cards/"+draw2.suit+"/"+draw2.name+".jpg>")
	document.getElementById("UsedCardResult").innerHTML = ("<img src=images/cards/"+used_cards[0].suit+"/"+used_cards[0].name+".jpg>")
	
	//We compare the new drawn card's value to the newest card in the used.cards array
	if (draw2.value > used_cards[0].value){
		//We add one to the variable rights and tell the user how many correct guesses they have 
		rights++;
		TotalCorrectGuesses++; 
		TotalGuesses++;
		document.getElementById("Guess").innerHTML = ("Correct! You now have "+rights+" correct guesses");
		console.log(localStorage.getItem('CorrectGuesses', TotalCorrectGuesses));
		
		//We check whether the user have won yet
	if (rights == 5) {
		// I got it to work by moving the "disabled=false above the "you are the champion"
		document.getElementById("reload").disabled=false;
		document.getElementById("Guess").innerHTML = ("Congratulations! Your stats have been stored. Reload game to play again");
		document.getElementById("draw2").disabled=true;
		document.getElementById("draw3").disabled=true;
		//We push a 'new user' into the array playThrough. However, we use the exact same values except the TotalGuesses and TotalCorretGuesses which we now update.  
		playThrough.push(new User(getPlayThrough[0].username, getPlayThrough[0].age, getPlayThrough[0].password, TotalGuesses, TotalCorrectGuesses));
		localStorage.setItem("playThrough", JSON.stringify(playThrough));  
	// Here, it will map through the users array, and if it finds a match between the usernames in the playThrough array and users array, it will replace the entire maching object.
		var merge = users.map(obj => playThrough.find(o => o.username === obj.username) || obj);
		// We then replace what is in localStorageUsers with the new merged array. 
		localStorage.setItem("localStorageUsers", JSON.stringify(merge));
		console.log(merge);
		rights = 0;
	}
	
	}else if (draw2.value <= used_cards[0].value){
		//We reset the variable 'rights' when the guess is wrong
		rights = 0;
		TotalGuesses++;
		beer++;
		document.getElementById("Guess").innerHTML = ("Wrong! You now have "+rights+" correct guesses");	
		document.getElementById("drinkToggle").innerHTML = ("<img src=images/Beers/beer"+beer+".png>")
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
		console.log(draw2);
		if (beer == beerlimit){ 
			beer = 1;
		} 
		if (deck.length === 0) {
			window.alert("You ran out of cards! Try again")
			location.reload();
		}

		document.getElementById("cardResult").innerHTML = ("<img src=images/cards/"+draw2.suit+"/"+draw2.name+".jpg>")
		document.getElementById("UsedCardResult").innerHTML = ("<img src=images/cards/"+used_cards[0].suit+"/"+used_cards[0].name+".jpg>")
		if (draw2.value < used_cards[0].value){
			rights++;
			TotalCorrectGuesses++;
			TotalGuesses++;
			console.log(localStorage.getItem('CorrectGuesses', TotalCorrectGuesses))
			document.getElementById("Guess").innerHTML = ("Correct! You now have "+rights+" correct guesses");
		if (rights == 5) {
		
			document.getElementById("reload").disabled=false;
			document.getElementById("Guess").innerHTML = ("Congratulations! Your stats have been stored. Reload game to play again");
			document.getElementById("draw2").disabled=true;
			document.getElementById("draw3").disabled=true;
			//
			playThrough.push(new User(getPlayThrough[0].username, getPlayThrough[0].age, getPlayThrough[0].password, TotalGuesses, TotalCorrectGuesses));
		localStorage.setItem("playThrough", JSON.stringify(playThrough));   
		var merge = users.map(obj => playThrough.find(o => o.username === obj.username) || obj);
		console.log(merge);
		localStorage.setItem("localStorageUsers", JSON.stringify(merge));
			rights = 0;
		}

		}else if (draw2.value >= used_cards[0].value){
			rights = 0;
			TotalGuesses++;
			beer++;
			document.getElementById("Guess").innerHTML = ("Wrong! You now have "+rights+" correct guesses");
			document.getElementById("drinkToggle").innerHTML = ("<img src=images/Beers/beer"+beer+".png>")
		}
		used_cards.splice(0,1);
	used_cards.push(draw2); 
	deck.splice(random2, 1);
	}
	
		console.log(used_cards);
	console.log(deck);
	


	// Get the modal
var modal = document.getElementById('rulesContent');

// Get the button that opens the modal
var btn = document.getElementById("rulesBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
	else{
	  // If they are not logged in, they are returned to the login file
	window.location.replace('index.html'); 
	}
