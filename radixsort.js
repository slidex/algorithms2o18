/**
 * --> radixsort -->
 * loop on all items, group by last bit
 * loop on all items, group by 2nd from the end bit
 * etc.
 * [1000,10,1,11]
 */
function radixsort(array, bitsOfKeys) {
  if (!array || array.length < 2) {
    return array;
  }
  for (var bitIndex = 0; bitIndex < bitsOfKeys; bitIndex++) {
    var mask = 1 << bitIndex;
    var firstUpperIndex = 0;
    for (var i = 0; i < array.length; i++) {
      if (!(mask & array[i])) {
        swap(array, i, firstUpperIndex);
        firstUpperIndex++;
      }
    }
  }
  return array;
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(radixsort([8,2,1,3], 8));
