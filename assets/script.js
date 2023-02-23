
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Get references for #generate and #password element
var generateBtn = document.querySelector("#generate");

// Function to generate password with user input
function generatePassword() {
  // Empty arrays must be local variables in order to reset. 
  var finalPassword = "";
  var userSelection = [];

  // Password Length
  var passLength = window.prompt(
    "How long do you want your password to be? (Must be between 10 and 64 characters)"
  );

 // Check empty password field
  if (passLength === "") {
    window.alert("Please fill in the password.");
    return;
  }
  // Minimum password length
  else if (passLength < 10) {
    window.alert("Password length must be greater than 10.");
    return;
  }
  // Maximum password length
  else if (passLength > 64) {
    window.alert("Password length must not be greater than 64.");
    return;
  }
  // Runs only if the password length is between 10 and 64
  else {
    // Defined user selection confirmations
    var isUpper = window.confirm("Do you want to add uppercase characters?");
    var isLower = window.confirm("Do you want to add lowercase characters?");
    var isNum = window.confirm("Do you want to add numbers?");
    var isSym = window.confirm("Do you want to add symbols?");

// If statements to add certain characters, add array to the end of the current array - .concat
    if (isUpper === true) {
      userSelection = userSelection.concat(upperCasedCharacters);
    }
    if (isLower === true) {
      userSelection = userSelection.concat(lowerCasedCharacters);
    }
    if (isNum === true) {
      userSelection = userSelection.concat(numericCharacters);
    }
    if (isSym === true) {
      userSelection = userSelection.concat(specialCharacters);
    }






