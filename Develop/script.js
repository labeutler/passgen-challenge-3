// Assignment Code (GIVEN)
var generateBtn = document.querySelector("#generate");

// Items needed to achieve password criteria.
  // password length at min 8 & max 128
  var passwordLength;
  // include lowercase Yes/No
  var confirmLower;
  // include uppercase Yes/No
  var confirmUpper;
  // include numeric Yes/No
  var confirmNumber;
  // include special characters Yes/No
  var confirmSpecial;
  // confrim choices
  var listChoices

// List options available
  //password length

  //lower case
  var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //upper case
  var caseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //numeric
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //special characters
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "/"];

// Write password to the #password input (GIVEN)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (GIVEN)
generateBtn.addEventListener("click", writePassword);

// Assign min/max length
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

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


