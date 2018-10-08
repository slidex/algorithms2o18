class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

function doAtDistanceFromEnd(head, k, nodeFn) {
  if (head === null) {
    return 0;
  }
  var distance = doAtDistanceFromEnd(head.next, k, nodeFn) + 1;
  if (distance === k) {
    nodeFn(head);
  }
  return distance;
}


var list = new Node(5, new Node(9, new Node(8, new Node(6, new Node(1)))));
doAtDistanceFromEnd(list, 4, (node) => console.log('Found: ' + node.value));
