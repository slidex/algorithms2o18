/**
 * 5
 * 2      7
 * /1 \3   \9
 * 
 * out: 5|2,7|1,3,N,9
 * out: (5, (2, 1, 3), (7, N, 9))
 *
 * Node: left, right, value
 */
class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class Printer {
  print(node) {
    if (node == null) {
      return;
    }
    const out = [];
    this.process(node, out);
    let flattenedOut = '';
    out.forEach((str) => flattenedOut += str);
    console.log(flattenedOut);
  }

  /*
   * if node
   *   print '(' val ', ' left ', ' right ')'
   * else
   *   print N
   */
  process(node, out) {
    if (node && (node.left || node.right)) {
      out.push('(');
      out.push(node.value);
      out.push(', ');
      this.process(node.left, out);
      out.push(', ');
      this.process(node.right, out);
      out.push(')');
    } else if (node) {
      out.push(node.value);
    } else {
      out.push('N');
    }
  }
}

const n31 = new Node(1);
const n32 = new Node(3);
const n34 = new Node(9);
const n21 = new Node(2, n31, n32);
const n22 = new Node(7, null, n34);
const n1 = new Node(5, n21, n22);

new Printer().print(n1);
