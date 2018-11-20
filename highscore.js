//We check if the user is logged in 
if (localStorage.getItem('status', 'loggedIn')) {

  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const GuessRatioA = a.GuessRatio;
    const GuessRatioB = b.GuessRatio;
  
    let comparison = 0;
    if (GuessRatioA < GuessRatioB) {
      comparison = 1;
    } else if (GuessRatioA > GuessRatioB) {
      comparison = -1;
    }
    return comparison;
  }
users.sort(compare);
console.log(users); 

function getRank() {

  // We loop through the array of users 
for (var i = 0; i < users.length; i++ ){
document.write("<li>Username: " + users[i].username, " Guess ratio: " + users[i].GuessRatio + "%" + "</li>")

   //Note to self: We add the "+" before the names, because the names is strings. We cannot get a sum of strings, and adding the "+" makes the system read it as numbers. This sums the new amount of guesses with the old..
    //console.log(+TotalGuesses + +users[users.length - 1].guesses);
    
//We pull the amount of guesses and correct guesses from all the users in the array and converts the values to a string. The code then converts it so %. 
 //document.write("<li>Username: " + JSON.stringify(users[i].username) + " Guess ratio: " + JSON.stringify((Math.round(users[i].correctGuesses / users[i].guesses * 100))) + "% " + "</li>");

 
}


}
}
else{
  // If they are not logged in, they are returned to the login file
window.location.replace('index.html'); 
}
