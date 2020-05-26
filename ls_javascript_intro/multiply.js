//multiply.js

function getNum(prompt){
  let rls = require("readline-sync");
  let num = rls.question(prompt);
  return num;
}

let num1 = getNum("Enter the first number: ");
let num2 = getNum("Enter the second number: ");
console.log(`${num1} * ${num2} = ${num1 * num2}`);
