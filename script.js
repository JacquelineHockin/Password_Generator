// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompts -- boolean variables
  var passLength = prompt(
    "How long would you like your password to be? Please pick a number between 8 and 128."
  );
  var uppercaseL = confirm(
    "Would you like your password to contain uppercase letters?"
  );
  var lowercaseL = confirm(
    "Would you like your password to contain lowercase letters?"
  );
  var numbers = confirm(
    "Would you like your password to contain numeric numbers?"
  );
  var specialCh = confirm(
    "Would you like your password to contain special characters?"
  );

  // arrays for password character possibilities
  var password = "";
  var uppercaseArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChArr = ["!", "@", "#", "$", "%", "&", "^", "*"];
  var allCh = [];

  // combining arrays using if statements
  if (uppercaseL === true) {
    allCh.push.apply(allCh, uppercaseArr);
  }
  if (lowercaseL === true) {
    allCh.push.apply(allCh, lowercaseArr);
  }
  if (numbers === true) {
    allCh.push.apply(allCh, numbersArr);
  }
  if (specialCh === true) {
    allCh.push.apply(allCh, specialChArr);
  }

  // randomize password // length of password selected by the user
  for (var i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * allCh.length);
    password = password + allCh[random];
  }

  return password;
}

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
