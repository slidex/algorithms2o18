
/*
 * Return the number of how many different ways a given total can be paid with coins.
 */

function combs(n, coins) {
  return combsPr(n, coins, 0);
}

function combsPr(n, coins, actCoinIndex) {
  if (n === 0) {
    return 1;
  }
  if (actCoinIndex >= coins.length) {
    return 0;
  }
  var result = 0;
  var coin = coins[actCoinIndex];
  for (var sum = 0; sum <= n; sum += coin) {
    result += combsPr(n - sum, coins, actCoinIndex + 1);
  }
  return result;
}

console.log(combs(11, [5, 2, 1]));

// test: 7, [5, 1]
//  7, [1]
//  2, [1]
