// Assignment code here

// Arrays
  var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", ",", "."];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Prompt user to select criterias
function generatePassword() {

  // Prompt user to select criterias
  // confirm password length
  var passwordLength = window.prompt(
    "Please enter the number of characters you want for your new password. Password should contain more than 8 characters and no more than 128 characters"

  // confirm lowercase
  var lowerCase = window.confirm(
    "Do you want lowercases in your password?"
  );

  // confirm uppercase
  var upperCase = window.confirm(
    "Do you want uppercases in your password?"
  );

  // confirm numeric
  var numeric = window.confirm(
    "Do you want numbers in your password?"
  );

  // confirm special characters
  var specialCharacter = window.confirm(
    "Do you want special characters in your password?"
  );
};


// Write password to the #password input
function writePassword() {

  // add values to select from
  // var values = "abcdefghijklmnopqrstuvwxyz!@#$%^&*(){}[]=<>/,.ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
