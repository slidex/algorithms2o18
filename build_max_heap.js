/**
 * --> build maxheap -->
 * [4,7,2,1,9,9]
 * 0
 * 1 2
 * 3456
 * [4,7,2,1,9]
 * [7,4,2,1,9]
 * [7,9,2,1,4]
 * [9,7,2,1,4]
 * take 1st and insert into size 1 heap, take 2nd and insert into size 2 heap, etc.
 * loop size = 1 to length(array)
 * loop node = leaf to root
 *   get parentNode
 *   if node > parentNode
 *     swap(node, parentNode)
 *   else break
 */
function buildMaxHeap(array) {
  if (!array || array.length < 2) {
    return array;
  }
  for (var size = 2; size <= array.length; size++) {
    var nodeIndex = size - 1;
    while (true) {
      var parentIndex = Math.ceil(nodeIndex / 2) - 1;
      if (parentIndex == -1) {
        break;
      }
      if (array[nodeIndex] > array[parentIndex]) {
        var temp = array[nodeIndex];
        array[nodeIndex] = array[parentIndex];
        array[parentIndex] = temp;
      } else {
        break;
      }
      nodeIndex = parentIndex;
    }
  }
  return array;
}

console.log(buildMaxHeap([4,7]))
console.log(buildMaxHeap([4,7,2,1,9,9]))
