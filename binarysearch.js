/**
 * --> binary search-->
 * if empty, return false
 * get middle point
 * if found, return
 * otherwise search the right half
 * [2,4,5,5,6,8,9], 8
 */
function binarysearch(array, item, startIndex, endIndex) {
  startIndex = startIndex || 0;
  endIndex = endIndex || array.length;
  if (!array || endIndex - startIndex <= 0) {
    return -1;
  }
  var midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  var midItem = array[midIndex];
  if (item === midItem) {
    return midIndex;
  }
  if (item < midItem) {
    return binarysearch(array, item, startIndex, midIndex - 1);
  } else {
    return binarysearch(array, item, midIndex + 1, endIndex);
  }
}

console.log(binarysearch([2,4,5,5,6,8,9], 8))
