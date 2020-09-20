// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Prompt user to select criterias
function generatePassword() {

  // confirm password length
  var passwordLength = window.prompt(
    "Please enter the number of characters you want for your new password. Password should contain more than 8 characters and no more than 128 characters"
  );

  // confirm lowercase
  var lowerCase = window.confirm(
    "Do you want lowecases in your password?"
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
  var scecialCharacter = window.confirm(
    "Do you want special characters in your password?"
  );

};

// Write password to the #password input
function writePassword() {

  // add values to select from
  var values = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP123456789"

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
