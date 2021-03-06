/*
 * Return the number of how many different ways a given total can be paid with coins.
 *
 5: 1, 2 coins
      5
    /2 \1
    3   4
  /2 \1  \1
 1    2   3
 |1   |1  |1
 0    1   2
      |1  |1
      0   1
          |1
          0
 */
var COINS = [5, 2, 1];

function combs(n) {
  return combsLimited(n, 0);
}

// TODO: Use memoization later.
function combsLimited(n, maxCoinIndex) {
  if (n <= 0) {
    return 0;
  }
  var result = 0;
  for (var i = maxCoinIndex; i < COINS.length; i++) {
    result += n === COINS[i] ? 1 : combsLimited(n - COINS[i], i);
  }
  return result;
}

// (5) -> (5, 0) -> (3, 2) + (4, 1)
// (3, 2) -> (1, 2) + (2, 1)
//         (-1, 2) + 1 + 1 + (1, 1) = 2
// (4, 1) -> (3, 1) -> (2, 1) -> (1, 1) = 1
console.log(combs(5));
console.log(combs(11));
