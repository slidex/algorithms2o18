function longestBlockSizeWithOneOptionalZero(num) {
  if (num === ~0) {
    return 32;
  }

  var previousSize = 0;
  var actualSize = 0;
  var result = 0;

  for (var mask = 1; num != 0; num >>= 1) {
    var bit = num & mask;
    if (bit === 1) {
      actualSize++;
    }
    if (bit === 0) {
      if (previousSize + actualSize > result) {
        result = previousSize + actualSize;
      }
      previousSize = actualSize;
      actualSize = 0;
    }
  }

  if (actualSize > 0) {
      if (previousSize + actualSize > result) {
        result = previousSize + actualSize;
      }
  }

  return result;
}

console.log(longestBlockSizeWithOneOptionalZero(parseInt("0", 2))); // 0
console.log(longestBlockSizeWithOneOptionalZero(~0)); // 32
console.log(longestBlockSizeWithOneOptionalZero(parseInt("0111011011", 2))); // 5
console.log(longestBlockSizeWithOneOptionalZero(parseInt("1001110011011", 2))); // 4
console.log(longestBlockSizeWithOneOptionalZero(parseInt("011101101101111", 2))); // 6

