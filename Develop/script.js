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


// Assignment Code (GIVEN)
var generateBtn = document.querySelector("#generate");

// Criteria needed
var enter;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;

// Password arrays of options: 

  //special character array
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric character array
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters array
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Upper case alphabetical characters array
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices;

// Write password to the #password input (GIVEN)
function writePassword() {
  var password = generatePassword();
}

//Add event listener to generate button (GIVEN) 
generateBtn.addEventListener("click", writePassword)

// function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("Please select how long you would like your password to be. Choose a value between 8 and 128"));
  
    if (!enter) {
        alert("There needs to be a value in order to continue.");
    } else if (enter < 8 || enter > 128) {
      
        enter = parseInt(prompt("You must choose a value between 8 and 128"));
       
    } else {
        // The four prompts that user can select from, at least one needs to be selected.
        confirmNumber = confirm("Would you like numbers to be included in your password?");
        confirmSpecial = confirm("Would you like special characters to be included in your password?");
        confirmUpper = confirm("Would you like upper case letters to be included in your password?");
        confirmLower = confirm("Would you like lower case letters to be included in your password?");
    };

    // If all options are declined
    if (!confirmSpecial && !confirmNumber && !confirmUpper && !confirmLower) {
        choices = alert("You must choose at least one criteria!");
    }
    
    // If user selects to include all four options.
    else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {

        choices = special.concat(number, lower, upper);
    }
    // If user selects to include Special characters, numbers and upper case letters.
    else if (confirmSpecial && confirmNumber && confirmUpper) {
        choices = special.concat(number, upper);
    }
    // If user selects to include special characters, numbers and lower case letters.
    else if (confirmSpecial && confirmNumber && confirmLower) {
        choices = special.concat(number, lower);
    }
    // If users selects to include special characters, lower and upper case letters and 
    else if (confirmSpecial && confirmLower && confirmUpper) {
        choices = special.concat(lower, upper);
    }
    // If user selects to include numbers, lower and upper case letters
    else if (confirmNumber && confirmLower && confirmUpper) {
        choices = number.concat(lower, upper);
    }

    // If user selects to include special characters and numbers
    else if (confirmSpecial && confirmNumber) {
        choices = special.concat(number);
    // If user selects to include special characters and lower case letters
    } else if (confirmSpecial && confirmLower) {
        choices = special.concat(lower);
    // If user selects to include special characters and upper case letters
    } else if (confirmSpecial && confirmUpper) {
        choices = special.concat(upper);
    }
    // If user selects to include lower case letters and numbers
    else if (confirmLower && confirmNumber) {
        choices = alpha.concat(number);
    // If user selects to include lower and upper case letters
    } else if (confirmLower && confirmUpper) {
        choices = lower.concat(upper);
    // if user selects to include numbers and upper case letters
    } else if (confirmNumber && confirmUpper) {
        choices = number.concat(upper);
    }
    // If user selects to include only special characters
    else if (confirmSpecial) {
        choices = special;
    }
    // If users selects to include only numbers
    else if (confirmNumber) {
        choices = number;
    }
    // If users selects to include only lower case letters
    else if (confirmLower) {
        choices = lower;
    }
    // If users select to include only upper case letters
    else if (confirmUpper) {
        choices = upper;
    };

    //place holder for password
    var password = [];

    // Random selection of all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    
    //used to combine users input for password criteria
    var newpass = password.join("");
    UserInput(newpass);
    return newpass;
}
// password into the textbox

function UserInput(newpass) {
    document.getElementById("password").textContent = newpass;

}
// GIVEN portion of "write password to the #password input."
var passwordText = document.querySelector("#password");
copy.addEventListener("click", function () {
    copyPassword();
    passwordText.value = password;

});