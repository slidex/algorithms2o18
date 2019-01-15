// Binary search tree, insert, iterative

/*
4,6,1,9,2,10:
  4
1   6
 2   9

Node
----------
+Node(value, left, right)
+value: int
+left: Node
+right: Node
+toString(): void
+insert(value: int): Node

while (node)
if value <= actValue:
  take left
else:
  take right
*/
class Node {
  constructor(value, left, right) {
    if (typeof value === 'undefined') {
      throw 'Value must be set.';
    }
    this.value = value;
    this.left = left;
    this.right = right;
  }
  
  insert(value) {
    let node = this;
    let toLeft;
    while (true) {
      toLeft = value <= node.value;
      if (toLeft && !node.left) {
        node.left = new Node(value);
        break;
      }
      if (!toLeft && !node.right) {
        node.right = new Node(value);
        break;
      }
      node = toLeft ? node.left : node.right;
    }
    return this;
  }
  
  toString() {
    return `[${this.value}, ${this.left || 'N'}, ${this.right || 'N'}]`;
  }
}

let root = new Node(4);
root.insert(6).insert(1).insert(9).insert(2).insert(10);

console.log(root.toString());
//console.log(new Node().toString());