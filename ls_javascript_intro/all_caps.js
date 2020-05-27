//all_caps.js

let rls = require("readline-sync");

let userString = rls.question("What's you favorite word/phrase?");

function allCaps(userString){
  if (userString.length >= 10) {
    console.log(userString.toUpperCase());
  } else {
    console.log(userString);
  }
}

allCaps(userString);
