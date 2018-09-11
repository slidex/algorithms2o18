/**
 * --> binary search first occurrence -->
 * take middle item
 * if array length is zero, return its index - 1
 * if item to find is less or equal, do the same for items before it
 * else do the same tiems after it
 * [1,3,5,5,5,5,7,8], 5
 */
function firstLowerItemIndex(array, item, startIndex, endIndex) {
  if (endIndex === startIndex) {
    return startIndex - 1;
  }
  var midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  var midItem = array[midIndex];
  if (item <= midItem) {
    return firstLowerItemIndex(array, item, startIndex, midIndex);
  } else {
    return firstLowerItemIndex(array, item, midIndex + 1, endIndex);
  }
}

/**
 * given: sorted items, item to find
 * returns: index, or -1 if not found
 */
function binarySearchFirst(array, item) {
  if (!array || array.length === 0) {
    return -1;
  }
  var lowerIndex = firstLowerItemIndex(array, item, 0, array.length);
  return array[lowerIndex + 1] === item ? lowerIndex + 1 : -1;
}

console.log(binarySearchFirst([1,3,5,5,5,5,7,8], 4));
console.log(binarySearchFirst([1,3,5,5,5,5,7,8], 3));
console.log(binarySearchFirst([1,3,5,5,5,5,7,8], 5));
