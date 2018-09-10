/**
 * quicksort
 * select one element, and partition items based on that
 * sort left partition
 * sort right partititon
 * [....*..]
 * [sssggI...p]
 */
function partition(array, startIndex, endIndex) {
  var firstGreaterIndex = startIndex;
  var pivot = array[endIndex - 1];
  for (var i = startIndex; i < endIndex - 1; i++) {
    if (array[i] < pivot) {
      swap(array, firstGreaterIndex, i);
      firstGreaterIndex++;
    }
  }
  swap(array, firstGreaterIndex, endIndex - 1);
  return firstGreaterIndex;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function quicksort(array, startIndex, endIndex) {
  if (!array || array.length <= 1) {
    return array;
  }
  startIndex = startIndex || 0;
  endIndex = endIndex || array.length;
  
  if (endIndex - startIndex <= 1) {
    return array;
  }
  var pivotIndex = partition(array, startIndex, endIndex);
  quicksort(array, startIndex, pivotIndex);
  quicksort(array, pivotIndex + 1, endIndex);
  return array;
}

console.log(quicksort([9,4]))
console.log(quicksort([9,9,4,5,1,2,3,9,6,6,7]))
