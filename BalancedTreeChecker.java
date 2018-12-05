import java.util.HashMap;
import java.util.Map;

public class BalancedTreeChecker {
  private static class HeightCache {
    private Map<TreeNode, Integer> cache = new HashMap<>();

    public int height(TreeNode node) {
      Integer value = cache.get(node);
      if (value == null) {
        value = node == null ? 0 : Math.max(height(node.left), height(node.right)) + 1;
        cache.put(node, value);
      }
      return value;
    }
  }

  public boolean isBalanced(TreeNode root) {
    return isBalanced(root, new HeightCache());
  }

  public boolean isBalanced(TreeNode root, HeightCache cache) {
    if (root == null) {
      return true;
    }
    return Math.abs(cache.height(root.left) - cache.height(root.right)) <= 1
       && isBalanced(root.left, cache) && isBalanced(root.right, cache);
  }

  public static void main(String[] args) {
    BalancedTreeChecker checker = new BalancedTreeChecker();
    TreeNode root1 = node(node(9), 3, node(node(15), 20, node(7)));
    TreeNode root2 = node(node(node(node(4), 3, node(4)), 2, node(3)), 1, node(2));
    TreeNode root3 = node(node(node(node(4), 3, node(4)), 2, null), 1, node(node(node(4), 3, node(4)), 2, null));
    TreeNode root4 = node(node(node(node(4), 3, node(4)), 2, node(9)), 1, node(node(node(4), 3, node(4)), 2, node(1)));

    System.out.println(checker.isBalanced(root4));
  }
  
  public static TreeNode node(int x) {
    return new TreeNode(x);
  }

  public static TreeNode node(TreeNode l, int x, TreeNode r) {
    return new TreeNode(l, x, r);
  }
}

class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode(int x) {
    val = x;
  }

  TreeNode(TreeNode left, int x, TreeNode right) {
    val = x;
    this.left = left;
    this.right = right;
  }
}
