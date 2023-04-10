// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // Ask user for length 
  // min 8 char max 120 char
let passwordLength= parseInt(prompt("How many characters should the password be?"));
if(passwordLength < 8 || passwordLength > 120) {
  alert("ERROR, invalid password length. \n Please choose a password greater than 8 and less than 128 characters");
  return "enter valid passphrase";
}

  // Ask the user for which characters to include

var includeLowercase = confirm("Include lowercase letters in password?");
var includeUppercase = confirm("Include uppcase letters in password?");
var includeNumbers = confirm("Include numbers in password?");
var includeSpecialCharacters = confirm("Include special characters in password?");

// Validating included charaters

if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters){
  alert("ERROR, invalid character types. \n Please include at least one type of each specified characters");
  return "";
}

  // generate random password
var passwordCharacters = [];
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numbersInPassword = [1,2,3,4,5,6,7,8,9];


if (includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}

if (includeNumbers) {
  passwordCharacters = passwordCharacters.concat(numbersInPassword);
}

if (includeUppercase) {
  passwordCharacters = passwordCharacters.concat(upperCaseCharacters.split(""));
}

if (includeLowercase) {
  passwordCharacters = passwordCharacters.concat(lowerCaseCharacters.split(""));
}

// password return information
var passwordResults = "";
for (var i=0; i < passwordLength; i++ ) {
  var randomIndex =Math.floor(Math.random() * passwordCharacters.length);
  var randomCharacter = passwordCharacters[randomIndex];
  passwordResults += randomCharacter;
}

  // return generated password
return passwordResults;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
