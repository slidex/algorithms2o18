// Binary search tree, insert, recursive

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

if value <= actValue:
  if !left: set left, then return
  else: insert into left
else:
  ...similar for right
  ...
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
  
  insert(value, root) {
    root = root || this;
    if (value <= this.value) {
      if (!this.left) {
        this.left = new Node(value);
        return root;
      } else {
        return this.left.insert(value, root);
      }
    } else {
      if (!this.right) {
        this.right = new Node(value);
        return root;
      } else {
        return this.right.insert(value, root);  // 6.ins(9,4)
      }
    }
  }
  
  toString() {
    return `[${this.value}, ${this.left || 'N'}, ${this.right || 'N'}]`;
  }
}

let root = new Node(4);
root.insert(6).insert(1).insert(9).insert(2).insert(10);

console.log(root.toString());
//console.log(new Node().toString());