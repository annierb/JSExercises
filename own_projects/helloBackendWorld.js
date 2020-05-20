//Hello, backend world!
//defining variables
const express = requrie('express');
const app = express();
//defining a function. Will say "hello world!"
app.get('/', (req, res) => res.send('Hello, world!'));
//this should be the output when run through node. When running,
//you want to navigate to http://localhost:3000 to see "hello world!"
app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!');
});
