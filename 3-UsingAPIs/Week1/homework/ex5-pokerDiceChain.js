/*------------------------------------------------------------------------------
In the previous exercise we used `Promise.all()` to throw five dices in one go.
In the current exercise we will be throwing five dices one at a time, waiting 
for a dice to settle before throwing the next one. Of course, we still consider 
a dice rolling off the table to be a showstopper.

To throw the dices sequentially we will be using a _promise chain_. Your job is 
to expand the given promise chain to include five dices.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const results = [];

  // TODO: expand the chain to include five dices
  return rollDice(1)
    .then((value) => {
      results.push(value);
      return rollDice(2);
    })
    .then((a) => {
      results.push(a);
      return rollDice(3);
    }) .then((b) => {
      results.push(b);
      return rollDice(4);
    }) .then((c) => {
      results.push(c);
      return rollDice(5);
    }).then((d) => {
      results.push(d);
      return results;
    });
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));

// ! Do not change or remove the code below
module.exports = rollTheDices;
