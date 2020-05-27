//number_range.js

//We love a good switch!! I'm trying to take use input to get used to it.
//I've used other programming languages and the integration of readline is
//much different than other languages like ruby or even non-node js

let rls = require("readline-sync");
let num = Number(rls.question("What's your favorite number?"));

console.log("Splendid! Let's see what range it falls under!");

function numRange(num){
  if (num < 0 ){
    console.log("Your number is less than zero. Feeling daring today, aren't we.");
  } else if (num >= 0 && num <= 50){
    console.log("Your number is between 0 and 50!");
  } else if (num >= 51 && num <= 100){
    console.log("Your number is between 51 and 100!");
  } else if (num > 100){
    console.log("Your number is over 100!");
  } else {
    console.log("How did you get here?!");
  }
}

numRange(num);
