// First Script //

/* - Ask the user for their name 
   - Ask the user for their last name
   - Ask the user for favourite colour
   -Create unsafe password
*/

//1st 

var firstName = prompt("What's your name?");
console.log(firstName);
console.log(typeof (firstName));


// document.getElementById("greetings").innerHTML = "Welcome " + firstName;

// 2nd

var lastName = prompt("What's your surname?");
console.log(lastName);
console.log(typeof (lastName));



// 3rd

var favouriteColour = prompt("What's your favourite colour?");
console.log(favouriteColour);
console.log(typeof (favouriteColour));

document.getElementById("Unsafe-Password").innerHTML = "Your Unsafe Password Is: " + firstName + lastName + favouriteColour + "21";