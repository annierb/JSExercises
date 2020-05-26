//new_greeting.js
let sync = require('readline-sync');

let firstName = sync.question("What's your first name?");
let lastName = sync.question("What's you last name?");

console.log(`What's up ${firstName + " " + lastName}?!`);
