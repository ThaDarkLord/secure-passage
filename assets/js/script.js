// Assignment Code
console.log(`Hello World`)
var charUpperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);
var charLowerCase = `abcdefghijklmnopqrstuvwxyz`.split(``);
var num = `01234567891`.split(``);
var specialChar =`~!@#$%^&*()~+=`.split(``);

// referneces the id used from the html
var generateBtn = document.querySelector("#generate");


  function generatePassword(){
    var newPassword = [];
    var userChoices = [];

var message = prompt(`How many characters would you like in your password?`);
if(message > 128 || message < 8){
    alert(`Must stay within 8-128 character parameters`);
  } else{
  var lower = confirm(`Would you like your password to contain lowercase letters?`);
if(lower){
  userChoices = userChoices.concat(charLowerCase);
}

if(!lower){
  confirm(`are you sure?`)
}
var upper = confirm(`would you like  your password to contain UPPERCASE letters?`)
if(upper){
  userChoices = userChoices.concat(charUpperCase);
} 

if(!upper){
  confirm(`are you sure?`)
}

  var special = confirm(`would you like your password to contain special characters?`);
if(special){
  userChoices = userChoices.concat(specialChar);
 
} 

if(!special){
  confirm(`are you sure?`)
}

var addNum = confirm(`would you like your password to contain numbers?`)
if(num){
  userChoices = userChoices.concat(num)
}

if(!num){
  confirm(`are you sure?`)
}
  }
console.log(userChoices)

// for loop goes through users chosen length and picks random values within the characters they selected.
for (var i = 0; i < message; i++) {
  var randomIndex = Math.floor(Math.random() * userChoices.length)
  var additions = userChoices[randomIndex];
  console.log(userChoices[randomIndex])
  newPassword.push(additions)
}

return newPassword.join(``)
  }

// writePassword();
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
