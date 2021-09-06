'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  // TODO complete this function; use Promise.race() and rollDice()
  const diceRace = Promise.race([
    rollDice(dices[0]),
    rollDice(dices[1]),
    rollDice(dices[2]),
    rollDice(dices[3]),
    rollDice(dices[4]),
  ]);
  return diceRace;
}

// Refactor this function to use async/await and try/catch
async function main() {
  try {
    const response = await rollTheDices();
    console.log('Resolved', response);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();

// ! Do not change or remove the code below
module.exports = rollTheDices;

/**
 * My answer to this is because our condition in rollDice function ==> if (roll < randomRollsToDo)
 * It does not matter which promise faster with the response here, our app keep our function running >
 * until the condition met!
 */
