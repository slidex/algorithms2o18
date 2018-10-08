/*
 * remove duplicates
 */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  
  toString() {
    return this.next === null
        ? this.value
        : this.value + ', ' + this.next.toString();
  }
}

function removeDuplicates(list) {
  if (list === null) {
    return null;
  }

  for (var node = list; node !== null;) {
    var prev = node;
    for (var tailNode = node.next; tailNode !== null;) {
      if (tailNode.value === node.value) {
        prev.next = tailNode.next;
      }
      prev = tailNode;
      tailNode = tailNode.next;
    }
    node = node.next;
  }
}

var list = new Node(5, new Node(5, new Node(8, new Node(9, new Node(8, null)))));
console.log('Before: ' + list.toString());

/*
 * (N5)5898
 * 5(N8)98
 * 58(N9)
 */
removeDuplicates(list);
console.log('After: ' + list.toString());
