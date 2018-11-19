console.log(localStorage);  

// a user class allows us to create users & 'call it' later to update features.
class User {

    //the constructor will allow us to create new objects for our class
    constructor(username, age, password, guesses, correctGuesses) {
        //this. assigns the 'username' property for a specific User (given in the corresponding field)
        this.username = username;
        this.age = age;
        this.password = password;
        this.guesses = guesses;
        this.correctGuesses = correctGuesses;
        this.GuessRatio = Math.round(correctGuesses / guesses * 100);
    }

}

// The array 'users' should contain both what we already have in localstorage + the new users created
users = JSON.parse(localStorage.getItem("localStorageUsers")) || [];

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

//We make sure that you can't create a user without any name or password
if(createUsername.length == 0 || createPassword.length == 0){
    // We set the resultspan with a new text and return false to get out of this function
    document.getElementById('loginResult').innerHTML = "Please fill in the required fields";
    return false;
}

//We loop through the array of users
for(var i = 0; i < users.length; i++) {
    //we create a var user to bind the array of users for easy use (below). Now we can write user instead of myUsers[i]
     var user = users[i];
    // We check whether the username is already taken
    if ((createUsername == user.username )) {
        document.getElementById('loginResult').innerHTML = "Username " + "'" + createUsername + "'" + " is already taken!";
    
    return false;  
}
}
//We first push the new user into the 'users' array
users.splice(0, 0, new User(createUsername, createAge, createPassword, "0", "0", ""));
localStorage.setItem("localStorageUsers", JSON.stringify(users)); 
//We then store the updated array within localstorage by converting it to a string
document.getElementById('loginResult').innerHTML = '<p>Success! The account has been created</p>';

 // ..
    
 if ((users.length)> 1  ) {
    
    return false; }

else {
//We have a set of predifined users for the array to use for the users later. We add them only on signup to avoid duplicates
 
users.push(new User("Mathias", "25", "Pepke", "5", "2", ""));
users.push(new User("James", "24", "Richman", "2", "1", ""));
users.push(new User("TEst", "24", "12", "1", "0", ""));
users.push(new User("Lorem Ipsum", "24", "12", "2", "2", ""));
users.push(new User("John", "24", "12", "3", "1", ""));
users.push(new User("Pete", "24", "12", "4", "3" ,""));
users.push(new User("O", "24", "12", "5", "4" ,""));
users.push(new User("User", "24", "12", "8", "6" ,""));
}
localStorage.setItem("localStorageUsers", JSON.stringify(users)); 
}
    

console.log(users);

// Bind the onClick-function to our own function
function login() {

//We create a new array to be able to store the logged in user later 
    playThrough = [];
//We use JSON.parse to get the data back from localstorage in its original format
var myUsers = JSON.parse( localStorage.getItem( "localStorageUsers" ) ); 

    console.log(myUsers);
    // Bind the two input fields and get the value
    var inputUsername = document.getElementById('username').value;
    var inputPassword = document.getElementById('password').value;

     //if the username or password isnt filled out it will return the message belwo
    if(inputUsername.length == 0 || inputPassword.length == 0){
        // We set the resultspan with a new text and return false to get out of this function
        document.getElementById('loginResult').innerHTML = "You need to enter a username and password in order to use our system";
        return false;
    }

//var storedUsers = localStorage.getItem("localStorageUsers");
// var storedUsers2 = JSON.parse(storedUsers);

if( myUsers === null ) {
document.getElementById('loginResult').innerHTML = "Invalid login!";
}
else {

   // We loop through all our users and return true if we find a match
   for(var i = 0; i <= myUsers.length; i++) {
    //we create a var user to bind the array of users for easy use (below). Now we can write user instead of myUsers[i]
     var user = myUsers[i];
    // We check whether the input matches what is stored in localStorage
    if ((inputUsername == user.username && (inputPassword == user.password))) {
       //We push the logged in user to our new array in order to store it for later use 
       playThrough.push(new User(user.username, user.age, user.password, user.guesses, user.correctGuesses, user.GuessRatio)); 
       console.log(playThrough);
    //We set a status to the user to be able to check whether they are logged in or not at other pages. Note that the comma (,) functions as a parent or =
     localStorage.setItem('status', 'loggedIn') 
//We store the playThrough array in localstorage so we can update it later 
      localStorage.setItem("playThrough", JSON.stringify(playThrough));   
      console.log("playThrough");
     
     // Redirect to new page
     window.location = "menu.html";
    jQuery(window).load(function() {
      });

      // Return true to jump out of the function, since we now have all we need.
     return true;
    } 
       else {
      document.getElementById('loginResult').innerHTML = "Invalid login!";
     }
    }
        
    
}
}
