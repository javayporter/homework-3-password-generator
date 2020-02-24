// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", promptUser) 
  function promptUser() {
    //prompts user to enter password lenghth
  var passwordLth = prompt("Please choose your password length. Enter a number between 8 and 128.");
  alert("Thank you. You entered " + passwordLth.value + ". Click OK to continue.")
  
    //prompts user to select character type(s)
  var charTypes = prompt("Please select the character types you'd like used in your password. Enter 1 for lowercase. Enter 2 for uppercase. Enter 3 for numeric. Enter 4 for special characters. You may select multiple types. For example if you'd like to include lowercase, uppercase, and special characters in your password, you'd enter 124.");
};


  





// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```