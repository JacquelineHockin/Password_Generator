// Assignment code here
var generateBtn = document.querySelector("#generate");

// start of function for password generation //
function generatePassword() {
  // boolean variables for prompts //
  var passLength = prompt(
    "How long will your password be? You must pick a number between 8 and 128."
  );
  var upperCase = confirm("Will your password use uppercase?");
  var lowerCase = confirm("Will your password use lowercase?");
  var numbers = confirm("Will your password use numbers?");
  var specialCh = confirm("Will your password use special characters?");

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  ////////////////////////////////////////////////////////////////////////////

  