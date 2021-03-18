// First Script //

/* - Ask the user for their name 
   - Ask the user for their last name
   - Ask the user for favourite colour
   -Create unsafe password
*/


//1st task

var firstName = prompt("What's Your Name?");
/* console.log(firstName);
console.log(typeof (firstName)); */


// document.getElementById("greetings").innerHTML = "Welcome " + firstName;

// 2nd task

var lastName = prompt("What's Your Surname?");
/* console.log(lastName);
console.log(typeof (lastName));  */


// 3rd task 

var favouriteColour = prompt("What's Your Favourite Colour?");
/* console.log(favouriteColour);
console.log(typeof (favouriteColour)); */

// 4th task - Unsafe password to be created

document.getElementById("Unsafe-Password").innerHTML = "Your Unsafe Password Is: " + firstName + lastName + favouriteColour + "21";