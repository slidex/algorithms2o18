/*
 * Return the number of how many different ways a given total can be paid with coins.
 *
n = sum i->k pi*ci, k: num of coins, ci: ith coin value.
6 = p0*5+p1*2+p2*1  (6: 5, 2, 1 coins)
sum = p0*5+p1*2
 */
var COINS = [5, 2, 1];

function combs(n) {
  var result = 0;
  var counter = new Counter(n);
  var hasMore = true;
  while (hasMore) {
    var sum = 0;
    for (var i = 0; i < COINS.length - 1; i++) {
      sum += counter.value[i] * COINS[i];
    }
    var lastCoinVal = COINS[COINS.length - 1];
    if (n >= sum && (n - sum) % lastCoinVal === 0) {
      result++;
      console.log(counter.value + ' * ' + COINS);
    }
    hasMore = counter.inc();
  }
  return result;
}

class Counter {
  constructor(n) {
    this.n = n;
    this.value = [];
    for (var i = 0; i < COINS.length - 1; i++) {
      this.value[i] = 0;
    }
  }
  
  inc() {
    for (var i = this.value.length - 1; i >= 0; i--) {
      var oldVal = this.value[i];
      var maxVal = Math.floor(this.n / COINS[i]);
      var newVal = (oldVal + 1) % (maxVal + 1);
      this.value[i] = newVal;
      if (newVal != 0) {
        return true;
      }
    }
    return false;
  }
}

console.log(combs(11));
