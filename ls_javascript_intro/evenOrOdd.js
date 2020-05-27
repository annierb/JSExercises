//evenOrOdd.js

let rls = require("readline-sync");
let strNum = rls.question("Enter in an integer!");

let num = Number(strNum);

function evenOrOdd(num){
  if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
  } else {
    console.log(`${num} is not an even number`);
  }
}

evenOrOdd(num);
