var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "0", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialChar = ["!", "#", "$", "%", "^", "&", "*", "+", "-", "`", "?",]


var passwordLength = 0;
var choices = [];
var result = ""


var generateBtn = document.querySelector("#generate");


function generatePassword() {
  passwordLength = window.prompt("Please enter a password length between 8 and 128 characters");
  while (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || isNaN(passwordLength)) {
    alert("Invalid, try again");


  }
  var confirmUppercase = confirm("Would you like uppercase characters in your password?")
  if (confirmUppercase === true) {
    choices = choices.concat(upperCase)

  }

  var confirmLowercase = confirm("Would you like lowercase characters in your password?")
  if (confirmLowercase === true) {
    choices = choices.concat(lowerCase);
  }

  var confirmNumbers = confirm("Would you like numbers in your password?")
  if (confirmNumbers === true) {
    choices = choices.concat(numbers);
  }

  var confirmSpecialChar = confirm("Would you like special characters in your password?")
  if (confirmSpecialChar === true) {
    choices = choices.concat(specialChar);

  }

  if (confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSpecialChar === false) {
    window.alert("You must select at least one parameter")
  }


  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * choices.length)
    var randomChar = choices[randomIndex]
    console.log(randomChar)
    result += randomChar
  }

  return result
}



function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}













// Add event listener to generate button */
generateBtn.addEventListener("click", writePassword);












/*
function writePassword() {
  var password = generatePassword();

}
*/

/*
writePassword()

  var numOfChars = prompt("How many characters")
  var yesToSpecialChars = askAboutSpecialCharacters()
  var areWeIncludingNumbers = askAboutNumbers()


  var finalPassword = giveThePassword()
  return finalPassword









  return


function askHowManyCharacters() {


    askAboutSpecialCharacters()
  }
  */
   // askAboutSpecial
//Write password to the #password input