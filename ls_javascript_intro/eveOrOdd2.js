//evenOrOdd2.js

let rls = require("readline-sync");
let strNum = rls.question("Enter any number, even an non-integer. We will make sure to turn it into the nearest one.");

let toNum = Number(strNum);
let num = parseInt(toNum);

function evenOrOdd(num){
  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is not an even number`);
  }
}

evenOrOdd(num);
