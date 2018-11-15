var Highscore = [Username, result]


// The welcome message to the user
// document.getElementById("highscore").innerHTML = localStorage.getItem('username') + " have " + localStorage.getItem('CorrectGuesses') + " correct guesses!" + " out of " + localStorage.getItem('Guesses') + " total guesses!";</script>

    var result = (localStorage.getItem('CorrectGuesses') / localStorage.getItem('Guesses') * 100);
    document.getElementById("Highscore").innerHTML = Math.round(result)  + '%'
  console.log('CorrectGuesses');