//We check if the user is logged in 
if (localStorage.getItem('status', 'loggedIn')) {

  //This function is used to compare the guess ratio of the users array. We will use it when we sort the array in the next function.
  function compareguessRatio(a, b) {
    const guessRatioA = a.guessRatio;
    const guessRatioB = b.guessRatio;
  
    let comparison = 0;
    if (guessRatioA < guessRatioB) {
      comparison = 1;
    } else if (guessRatioA > guessRatioB) {
      comparison = -1;
    }
    return comparison;
  
  }
  function sortguessRatio() {
  users.sort(compareguessRatio);

  // We create the HTML tag "<ol>" before the <li> will be inserted. If we add <ol> or <ul> in the loop, it will close the tag for each line it prints.
  var x = document.createElement("ol");
  document.body.appendChild(x);



  // We loop through the array of users 
  for (var i = 0; i < users.length; i++ ){
  document.getElementById("highscore").appendChild(x).innerHTML += ("<li><b> " + users[i].username + ":</b> " + users[i].guessRatio + "%" + "</li>")
    }
  }

function compareCorrectGuesses(a, b) {
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

var x = document.createElement("ol");
document.body.appendChild(x);


// We loop through the array of users 
for (var i = 0; i < users.length; i++ ){
document.getElementById("highscore2").appendChild(x).innerHTML += ("<li><b> " + users[i].username + ":</b> " + users[i].correctGuesses + "</li>")
}
}




}
else{
  // If they are not logged in, they are returned to the login file
window.location.replace('index.html'); 
}
