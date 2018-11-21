if (localStorage.getItem('status', 'loggedIn')) {

    var getPlayThrough = JSON.parse(localStorage.getItem('playThrough'));

    document.getElementById("getUser").innerHTML = ("<h1>" + getPlayThrough[0].username + "</h1>");

 document.getElementById("getUsername").innerHTML = (getPlayThrough[0].username);

 document.getElementById("getAge").innerHTML = (getPlayThrough[0].age);

}
else{
    // If they are not logged in, they are returned to the login file
  window.location.replace('index.html'); 
  }
  