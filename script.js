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
  var passwordLth = prompt("Please choose your password length. Enter a whole number between 8 and 128.");
  var userInputPwl = parseInt(passwordLth);

    //only run logic if user enters a valid integer
  if(userInputPwl >= 8 && userInputPwl <= 128) {
  alert("Thank you. You entered " + userInputPwl + ". Click OK to continue.")
  }
  else {
    alert("Please enter a whole number between 8 and 128.")
    prompt("Please choose your password length. Enter a whole number between 8 and 128.")
  };

  

    //execute code once then continue executing until user selects character type
  do {
    var charTypeLower = confirm("Would you like your password to contain lowercase characters?");
    var charTypeUpper = confirm("Would you like your password to contain uppercase characters?");
    var charTypeNumeric = confirm("Would you like your password to contain numeric characters?");
    var charTypeSpec = confirm("Would you like your password to contain special characters?");

    if(charTypeLower != true && charTypeNumeric != true && charTypeUpper != true && charTypeSpec != true) {
      alert("Please select at least one character type.")
    }
  }
  
  while(charTypeLower != true && charTypeNumeric != true && charTypeUpper != true && charTypeSpec != true);


    //function generates and returns password to page 
          function generate (length = userInputPwl) {
              var lowercase = "abcdefghijklmnopqrstuvwxyz";
              var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              var numeric = "0123456789";
              var specChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

              var allChars = lowercase + uppercase + numeric + specChars;

              var password = " ";

            for (i = 0; i < length; i++) {
              var chars = Math.floor(Math.random() * allChars.length);
              password += allChars.substring(chars, chars + 1);
                }
  
            return password;
                }

  document.querySelector("#password").innerHTML = generate() 
  };  
   