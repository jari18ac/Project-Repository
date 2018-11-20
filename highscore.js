//We check if the user is logged in 
if (localStorage.getItem('status', 'loggedIn')) {

  function compareGuessRatio(a, b) {
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
  function sortGuessRatio() {
  users.sort(compareGuessRatio);

  // We loop through the array of users 
for (var i = 0; i < users.length; i++ ){
document.getElementById("highscore").innerHTML += ("<li>Username: " + users[i].username + " Guess ratio: " + users[i].GuessRatio + "%" + "</li>")
}
}

function compareCorrectGuesses(a, b) {
  // Use toUpperCase() to ignore character casing
  const CorrectGuessesA = a.correctGuesses;
  const CorrectGuessesB = b.correctGuesses;

  let comparison = 0;
  if (CorrectGuessesA < CorrectGuessesB) {
    comparison = 1;
  } else if (CorrectGuessesA > CorrectGuessesB) {
    comparison = -1;
  }
  return comparison;

}
function sortCorrectGuesses() {
users.sort(compareCorrectGuesses);

// We loop through the array of users 
for (var i = 0; i < users.length; i++ ){
document.getElementById("highscore2").innerHTML += ("<li>Username: " + users[i].username + " Correct guesses: " + users[i].correctGuesses + "</li>")
}
}




}
else{
  // If they are not logged in, they are returned to the login file
window.location.replace('index.html'); 
}
