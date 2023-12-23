// Assignment Code
// var generateBtn = document.querySelector("#generate");
console.log(`Hello World`)
var charUpperCase = [`A`, `B`, `C`, `D`,`E`,`F`, `G`, `H`, `I`,`J`,`K`, `L`, `M`, `N`,`O`,`P`, `Q`, `R`, `S`,`T`,`U`, `V`, `W`, `X`,`Y`,`Z`];
var charLowerCase = [`a`, `b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
var num = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];
var specialChar =[`!`, `@`, `#`, `$`, `%`, `^`,`-`,`+`, `=`,`~`];
var newPassword = [];
var userChoices = [];
var passLength = [];


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
var message = prompt(`How many characters would you like in your password?`);
if(message > 128 || message < 8){
    alert(`Must stay within 8-128 character parameters`);
  } else{
   
    console.log(message)
   
    
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
console.log(message);

for (let i = 0; i < message; i++) {
  var randomIndex = Math.floor(Math.random() * userChoices.length)
  console.log(randomIndex)
  userChoices = randomIndex.toString()
  newPassword = newPassword.push(userChoices)
 
}


// }
// writePassword();
  


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); 
