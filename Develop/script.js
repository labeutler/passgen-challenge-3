// Assignment Code (GIVEN)
var generateBtn = document.querySelector("#generate");

//Criteria needing to be collected
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSpecial;
var userResponse;

// array if including lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array if including uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// array if including numeric
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// array if including special characters 
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "/"];
// confrim choices


// Write password to the #password input (GIVEN)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (GIVEN)
generateBtn.addEventListener("click", writePassword);



//create function
function generatePassword() {
  //request password length
  passwordLength = prompt("Please provide the length of characters you want your password to be. (No less than 8 or greater than 128.)");
  console.log("Password Length" + passwordLength);


  if (!passwordLength) {
    alert("Value Required");
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  }
  else {
    confirmLower = confirm("Would you like lower case letters included?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Would you like upper case included?");
    console.log("Upper case " + confirmUpper);
    confirmNumbers = confirm("Would you like numbers included?");
    console.log("Number " + confirmNumbers);
    confirmSpecial = confirm("Would you like special characters included?");
    console.log("Special Character " + confirmSpecial);
  };


  
}





// //input required password length (between 8 and 128)
// passwordLength = prompt("REQUIRED: Please enter how many charachters you would like your password to be. (8-128 characters");
// console.log("Password length " + passwordLength);

// //informing of required value
// if (passwordLength === null) {
//   alert("Value Required");

// } else if (passwordLength < 8 || passwordLength > 128) {
//   passwordLength = prompt("You must choose between 8 and 128");
//   console.log("Password length " + passwordLength);
// } else {
//   confirmLower = confirm("Will this include lower case letters?");
//   console.log("Lower case " + confirmLower);
//   confirmUpper = confirm("Will this include upper case letters?");
//   console.log("Upper case " + confirmUpper);
//   confirmNumber = confirm("Will this include numbers?");
//   console.log("Number " + confirmNumber);
//   confirmSpecial = confirm("Will this include special characters?");
//   console.log("Special Character " + confirmSpecial);
// };

// // Assign min/max length
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }

// var password=document.getElementById("passwork");

// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
//   THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
//   THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
//   THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
//   THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
//   THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
//   THEN a password is generated that matches the selected criteria

// WHEN the password is generated
//   THEN the password is either displayed in an alert or written to the page