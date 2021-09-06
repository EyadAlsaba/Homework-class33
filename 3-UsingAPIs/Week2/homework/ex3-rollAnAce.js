'use strict';
/*------------------------------------------------------------------------------
1. Run the unmodified exercise and observe that it works as advertised. Observe 
   that the dice must be thrown an indeterminate number of times until we get an 
   ACE or until it rolls off the table.
2. Now, rewrite the body of the `rollDiceUntil()` function using async/await and 
   without using recursion. Hint: a `while` loop may come handy.
3. Refactor the function `main()` to use async/await and try/catch.
------------------------------------------------------------------------------*/
// ! Do not change or remove the next two lines
const rollDice = require('../../helpers/pokerDiceRoller');

async function rollDiceUntil(wantedValue) {
  // I used LET to be able to update the statues of the promise!

  // When this promise resolve to 'ACE' will jump to return and stop execution!
  let value = await rollDice();

  // Otherwise we provide while loop to keep our function running until the condition met or the promise rejected!
  while (value !== wantedValue) {
    value = await rollDice();
  }
  return value;
}
// TODO refactor this function to use try/catch
async function main() {
  try {
    const response = await rollDiceUntil('ACE');
    console.log('Resolved', response);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollDiceUntil;
