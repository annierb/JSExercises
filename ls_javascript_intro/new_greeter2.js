//new_greeter2.js
function getName(ask){
  let rls = require('readline-sync');
  let name = rls.question(ask);
  return name;
}

let firstName = getName("What's your first name?");
let lastName = getName("What's your last name?");
console.log(`What's up, ${firstName + " " +lastName}!`);
