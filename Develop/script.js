var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var specialCharacters = '!@#$%^&*?';
var allCharacters = '';

// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  var passwordLength = prompt('What is the length of your password?');
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password Length must be between 8 to 128 characters.");
    return generatePassword();
    }
  

// Variables listed below determine whether or not an array is used in the generator.
  var passUpper = confirm('Do you want uppercase letters in your password?');
  if (passUpper == true) {
    console.log('tag4', allCharacters);
     allCharacters += upperCase
  }
  
  var passLower = confirm('Do you want lowercase letters in your password?');
  if (passLower == true) {
    console.log('tag3', allCharacters);
    allCharacters += lowerCase
 }
 
  var passNum = confirm('Do you want numbers in your password?');
  if (passNum == true) {
    console.log('tag2', allCharacters);
    allCharacters += numbers

  }
  var passSpecial = confirm('Do you want special characters in your password?');
  if (passSpecial == true) {
    console.log('tag1', allCharacters);
    allCharacters += specialCharacters
 }

 var passwordRandom = ''
 for (var i = 0, n = allCharacters.length; i < passwordLength; ++i) {
  passwordRandom += allCharacters.charAt(Math.floor(Math.random() * n));
}

console.log(passwordRandom);
return passwordRandom;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);