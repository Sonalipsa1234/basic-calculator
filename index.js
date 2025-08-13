// index.js
console.log("Calculator app starting...");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter first number: ', (a) => {
  readline.question('Enter second number: ', (b) => {
    console.log(`Sum: ${parseFloat(a) + parseFloat(b)}`);
    readline.close();
  });
});

