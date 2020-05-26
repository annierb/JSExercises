//new_greeter.js
let rlSync = require("readline-sync");

let firstName = rlSync.question("What's your first name?");
let lastName = rlSync.question("What's your last name?");

function greeter(firstName, lastName){
  console.log(`Greetings, ${firstName + " " + lastName}!`);
}

greeter(firstName, lastName);
