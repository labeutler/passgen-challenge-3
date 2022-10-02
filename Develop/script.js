// Assignment Code (GIVEN)
var generateBtn = document.querySelector("#generate");

//Required password criteria
var passwordCriteria = {

  //Required length criteria, between 8-128
  passLength: 0,

  // array if including lowercase
  lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  // array if including uppercase
  upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  // array if including numeric
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  // array if including special characters 
  special: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?"],
}

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
  
  //Results of passwords requested criteria
  var request = "";

  //Criteria needing to be collected
  var passwordLength = 0;
  var confirmLower;
  var confirmUpper;
  var confirmNumbers;
  var confirmSpecial;

  //character criteria length
  passwordLength = 0;
  passwordCriteria.passLength = 0;
  request = "";

  //confirm length of password
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password length required to be more than 8 and less than 128.")
  }
  //If value is NOT entered, response would be
  if (passwordLength === null) {
    return "Your Secure Password";
  }
  //Verify required value meets criteria
  else {
    if (passwordLength < 8 || passwordLength >128) {
      alert ("You must choose between 8 and 128");
      return "Your Secure Password";
    }
    else {
    //Call required criteria promps
    showPrompts();
  }

  //If no prompts are selected
  while (passwordCriteria.passLength < passwordLength) {
    if (confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSpecial === false) {
      alert("You MUST select at least ONE of the following creteria to be included: lower case, upper case, numbers or special characters.")
      showPrompts();
    }
  


  // //If Only Upper Case is selected
  // else (confirmUpper) {
  //   userResponse = upperCase;
  //   console.log(userResponse);
  // }
  // //If only Lower Case is selected
  // else if (confirmLower) {
  //   userResponse = lowerCase;
  //   console.log(userResponse);
  // }
  // //If only Numbers are selected
  // else if (confirmNumbers) {
  //   userResponse = numbers;
  //   console.log(userResponse);
  // }
  // //If only Special Characters are selected
  // else if (confirmSpecial) {
  //   userResponse = special;
  //   console.log(userResponse);
  // }
  // //If Upper Case AND Lower Case are selected
  // else if (confirmUpper && confirmLower) {
  //   userResponse = upperCase.concat(lowerCase);
  //   console.log(userResponse);
  // }
  // //If Upper Case AND Numbers are selected
  // else if (confirmUpper && confirmNumbers) {
  //   userResponse = upperCase.concat(numbers);
  //   console.log(userResponse);
  // }
  // //If Upper Case AND Special Characters are selected
  // else if (confirmUpper && confirmSpecial) {
  //   userResponse = upperCase.concat(special);
  //   console.log(userResponse);
  // }
  // //If Lower Case AND Numbers are selected
  // else if (confirmLower && confirmNumbers) {
  //   userResponse = lowerCase.concat(numbers);
  //   console.log(userResponse);
  // }
  // //If Lower Case AND Special Characters are selected
  // else if (confirmLower && confirmSpecial) {
  //   userResponse = lowerCase.concat(special);
  //   console.log(userResponse);
  // }
  // //IF Numbers AND Special Characters are selected
  // else if (confirmNumbers && confirmSpecial) {
  //   userResponse = numbers.concat(special);
  //   console.log(userResponse);
  // }


  // //to create loop for random selection
  // for (var i = 0; i < passwordLength; i++) {
  //   var allChoices = userResponse[Math.floor(Math.random() * userResponse.length)];
  //   newPassword.push(allChoices);
  //   console.log(allChoices);
  // }


  //Show results requested from prompts.
  return request;

  //Prompts for requesting password criteria
  function showPrompts() {
    confirmLower = confirm("Would you like lower case letters included in your password?");
    confirmUpper = confirm("Would you like upper case letters included in your password?");
    confirmNumbers = confirm("Would you like numbers included in your password?");
    confirmSpecial = confirm("Would you like special characters included in your password?");
  }

}






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
//THEN the password is either displayed in an alert or written to the page.