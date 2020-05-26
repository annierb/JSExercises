//age.js

let rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you?"));

console.log(`In 10 years you'll be ${age + 10}! In 20 years, ${age +20}, in 30
years, ${age +30}, and in 40, ${age +40}. You're gonna be old, son!`);
