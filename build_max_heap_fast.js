/**
 * --> build maxheap fast -->
 * [4,7,2,1,9]
 * go from the end and add nodes to and empty heap from the bottom
 * when adding a new node, adjust heap
 * loop index: array size - 1 to 0
 *   insert(array, index, array[index])
 * 0
 * 1 2
 * 3456
 */
function buildMaxHeapFast(array) {
  if (!array || array.length < 2) {
    return array;
  }
  for (var index = array.length - 1; index >= 0; index--) {
    insert(array, index, array.length);
  }
  return array;
}

/**
 * get left child of node
 * get right child of node
 * if (left > node && right > node)
 *   child = find max (left, right)
 *   swap (child, node)
 *   insert(array, childIndex, array.length)
 * if (left > node)
 *   swap (left, node)
 *   insert(array, leftIndex, array.length)
 * if (right > node)
 *   swap (right, node)
 *   insert(array, rightIndex, array.length)
 * [3,9,7,6], 0
 */
function insert(array, index, size) {
  var node = array[index];
  var leftChildIndex = 2 * index + 1;
  var rightChildIndex = 2 * index + 2;
  var leftChild = leftChildIndex >= size ? null : array[leftChildIndex];
  var rightChild = rightChildIndex >= size ? null : array[rightChildIndex];
  if (leftChild > node && rightChild > node) {
    var maxChildIndex = leftChild > rightChild ? leftChildIndex : rightChildIndex;
    var maxChild = leftChild > rightChild ? leftChild : rightChild;
    swap(array, maxChildIndex, index);
    insert(array, maxChildIndex, size);
  } else if (leftChild > node) {
    swap(array, leftChildIndex, index);
    insert(array, leftChildIndex, size);
  } else if (rightChild > node) {
    swap(array, rightChildIndex, index);
    insert(array, rightChildIndex, size);
  }
}

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(buildMaxHeapFast([4,7]))
console.log(buildMaxHeapFast([4,7,2,1,9,9]))
