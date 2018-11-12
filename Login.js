// a user class allows us to create users & 'call it' later to update features.
class User {

    //the constructor will allow us to create new objects for our class
    constructor(username, age, password) {
        //this. assigns the 'username' property for a specific User (given in the corresponding field)
        this.username = username;
        this.age = age;
        this.password = password;
    }
}

//bind button for later use (logging in & creating users)
var submit = document.getElementById('submit');

//creating a 'span' that is called after the login result
var resultSpan = document.getElementById('loginResult');

// Creating a function to push new users into the array "users"
function signUp() {  
 // we bind each id to a variable for easy use  
var createUsername = document.getElementById('createUsername').value;
var createAge = document.getElementById('createAge').value;
var createPassword = document.getElementById('createPassword').value;
//We use localStorage to store the data typed in the fields
localStorage.setItem("username", createUsername);
localStorage.setItem("age", createAge);
localStorage.setItem("password", createPassword);
console.log(localStorage);
}

// Bind the onClick-function to our own function
submit.onclick = function(){

    // Bind the two input fields and get the value
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;
    // We check whether the input matches what is stored in localStorage
    if ((inputUsername == localStorage.getItem('username')) && (inputPassword == localStorage.getItem('password'))) {
    //We set a status to the user to be able to check whether they are logged in or not at other pages. Note that the comma (,) functions as a parent or =
      localStorage.setItem('status', 'loggedIn') 
      //Redirect to new page
      window.location = "menu.html";
        jQuery(window).load(function() {
        });

      // Return true to jump out of the function, since we now have all we need.
     return true;
    } 
      //document.getElementById('loginResult').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
       else {
      document.getElementById('loginResult').innerHTML = "Invalid login!";
     }
    
        
    
}
