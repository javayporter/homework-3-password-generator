// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLth = prompt("Please choose your password length. Enter a number between 8 and 128.");
var passwordLthVal = // if user enters an interger between 8-128 alert(ThankyouNext) else return an error and do not proceed to next prompt // 


// var passwordChar = prompt("Please select")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  var passwordLth = prompt("Please choose your password length. Enter a number between 8 and 128.")
};


// document.querySelector('#bgnBtn').addEventListener('click', function() {
//   var userAdjective = prompt("Please provide an Adjective");
//   alert (userAdjective);
// }

//  var submitAnswer = function() {

//   var radios = document.getElementsByName('choice');
//   var val= "";
//   for (var i = 0, length = radios.length; i < length; i++) {
//       if (radios[i].checked) {
//          val = radios[i].value; 
//          break;
//        }
//   }
  
//   if (val == "" ) {
//     alert('please select choice answer');
//   } else if ( val == "Scripting" ) {
//     alert('Answer is correct !');
//   } else {
//     alert('Answer is wrong');
//   }
// };