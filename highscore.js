//We check if the user is logged in 
if (localStorage.getItem('status', 'loggedIn')) {

  //We define the array users, coming from Login.js, as users for clarification

function sortArray() {
  for (var i = 0; i < users.length; i++ ){
  
 users[i].GuessRatio.sort(function(a, b){return b - a});
}
}
function getRank() {

  // We loop through the array of users 
for (var i = 0; i < users.length; i++ ){
document.write(users[i].username, users[i].GuessRatio)

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
 