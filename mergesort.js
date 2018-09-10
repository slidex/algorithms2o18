/**
 * mergesort
 * get 1st half, sort
 * get 2nd half, sort
 * merge two sorted parts
 * [9,4,7,1,1]
 * [9,4] [7,1,1]
 * [9] [4] [7] [1,1]
 * [9] [4] [7] [1] [1]
 * [4,9] [7] [1,1]
 * [4,9] [1,1,7]
 * [1,1,4,7,9]
 */
function mergesort(array) {
  if (!array || array.length < 2) {
    return array;
  }
  var i = parseInt(array.length / 2, 10);
  var left = array.slice(0, i);
  var right = array.slice(i);
  left = mergesort(left);
  right = mergesort(right);
  var result = [];
  for (var leftIndex = 0, rightIndex = 0;
      leftIndex < left.length || rightIndex < right.length;) {
    var leftNext = leftIndex < left.length ? left[leftIndex] : null;
    var rightNext = rightIndex < right.length ? right[rightIndex] : null;
    if (rightNext === null) {
      result.push(leftNext);
      leftIndex++;
    } else if (leftNext === null) {
      result.push(rightNext);
      rightIndex++;
    } else if (leftNext < rightNext) {
      result.push(leftNext);
      leftIndex++;
    } else {
      result.push(rightNext);
      rightIndex++;
    }    
  }
  return result;
}

console.log(mergesort([9,4,7,1,1]));
console.log(mergesort([9,9,6,3,3,2,2,1,4,7,1,1]));
