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
// initialise an empty array to store users
var users = [];

//have predefined users because we arent using a database
users.push(new User("Mathias", "25", "Pepke"));
users.push(new User("James", "17", "Ungermann"));
users.push(new User("1", "17", "1"));

//bind button for later use (logging in & creating users)
var submit = document.getElementById('submit');

//creating a 'span' that is called after the login result
var resultSpan = document.getElementById('loginResult');

//we are creating a counting variable to track login attempts
var counter = 3;

// Bind the onClick-function to our own function
submit.onclick = function(){

    // Bind the two input fields and get the value
    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password');
  
   //if the username or password isnt filled out it will return the message belwo
    if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
      // We set the resultspan with a new text and return false to get out of this function
      resultSpan.innerText = "You need to enter a username and password in order to use our system";
      return false;
    }
  
    // We loop through all our users and return true if we find a match
 for(var i = 0; i < users.length; i++) {
    //we create a var user to bind the array of users for easy use (below). Now we can write user instead of users[i]
     var user = users[i];

    // If username and password we have in put matches the one in our loop
    if(user.username == inputUsername.value && user.password == inputPassword.value) {
        //this redirects the user to our menu page
        window.location = "menu.html";

      // Return true to jump out of the function, since we now have all we need.
      return true;
    }
}

// We check if the user has tried to enter a wrong username and password too many times
if(counter == 0){
    // Since the user has tried three times, we let the user know that he's been banned
    resultSpan.innerText = "You've entered the wrong username and password three times. You've been banned from our system";

    // Disable the two input fields and the button in order for the user to not make any trouble
    inputUsername.disabled = true;
    inputPassword.disabled = true;
    submit.disabled = true;

    // Return false to stop us from doing anything further.
    return false;

  }else {
    // Since we did not find a match, we know that the user has typed a wrong password and username
    resultSpan.innerText = "You've entered a username or password that does not match our stored credentials";

    // Update the counter with an attempt of logging in.
    counter--;

    // Return false, since we do not have anything more to do
    return false;
  }
};
