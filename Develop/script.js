// Assignment code here

// Define Variables and Arrays
  var values = [];
  var randomPassword = "";
  var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create function to generate password
function generatePassword() {

  // prompt user for input and criterias
  // confirm password length
  var confirmLength = window.prompt(
    "How many characters should the password contain? Choose a number between 8 and 128."
  );
  // create a loop if input does not meet length criteria
  while(confirmLength < 8 || confirmLength > 128) {
    window.alert("Please pick a number between 8 and 128 characters.");
    var confirmLength = window.prompt("How many characters should the password contain? Choose a number between 8 and 128.")
  }
    // confirm the other criterias
    // confirm lowercase
    var confirmLowerCase = window.confirm(
      "Do you want lowercases in your password?"
    );

    // confirm uppercase
    var confirmUpperCase = window.confirm(
      "Do you want uppercases in your password?"
    );

    // confirm numeric
    var confirmNumber = window.confirm(
      "Do you want numbers in your password?"
    );

    // confirm special characters
    var confirmSymbol = window.confirm(
      "Do you want symbols in your password?"
    );
  

  // if no criteria was selected, create loop until at least one criteria is confirmed
  while (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSymbol) {
    window.alert("Please select at least one criteria.");
    var confirmLowerCase = window.confirm(
      "Do you want lowercases in your password?"
    );
    var confirmUpperCase = window.confirm(
      "Do you want uppercases in your password?"
    );
    var confirmNumber = window.confirm(
      "Do you want numbers in your password?"
    );
    var confirmSymbol = window.confirm(
      "Do you want symbols in your password?"
    );
  
  }
  
  // Define Criterias
  if (confirmLowerCase) {
    values = values.concat(lowerCases);
  }

  if (confirmUpperCase) {
    values = values.concat(upperCases);
  }

  if (confirmNumber) {
    values = values.concat(numbers);
  }

  if (confirmSymbol) {
    values = values.concat(symbols);
  }
  console.log(values);

  // for loop for random password
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + values[Math.floor(Math.random() * values.length)];
    console.log(randomPassword);
  }
  return randomPassword;
  
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
