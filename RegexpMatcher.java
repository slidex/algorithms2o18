import java.util.ArrayList;
import java.util.List;

/*
Match pattern against a string. Support * and ? wildcard chars.
test text
e?t
te*te
e*
?e*
*/
public class RegexpMatcher {
  public static void find(String pattern, String text) {
    TrieNode root = buildSuffixTree(text);
    find(root, pattern);
  }

  private static void find(TrieNode root, String pattern) {
    if (pattern == null) {
      return;
    }
    if (pattern.length() == 0) {
      System.out.println(root.getText());
      return;
    }

    char actual = pattern.charAt(0);

    if (actual == '?') {
      for (TrieNode child : root.getChildren()) {
        find(child, pattern.substring(1));
      }
    } else if (actual == '*') {
      root.visitAll((node) -> find(node, pattern.substring(1)));
    } else {
      TrieNode matchingChild = root.findChild(actual);
      if (matchingChild != null) {
        if (pattern.length() == 1) {
          System.out.println(matchingChild.getText());
        } else {
          find(matchingChild, pattern.substring(1));
        }
      }
    }
  }

  public static TrieNode buildSuffixTree(String str) {
    TrieNode root = new TrieNode();
    String suffix = str;
    while (suffix.length() > 0) {
      root.addText(suffix);
      suffix = suffix.substring(1);
    }
    root.addText("");
    return root;
  }

  public static void main(String[] args) {
//    TrieNode root = buildSuffixTree("test text");
//    display(root);
//    find("te", "test text");
//    find("e?t", "test text");
//    find("te*te", "test text");
//    find("e*", "test text");
    find("e?t*x", "test text");
  }

  private static void display(TrieNode node) {
    if (node == null) {
      return;
    }
    if (node.isEnd()) {
      System.out.println(node.getText());
    }
    for (TrieNode child : node.getChildren()) {
      display(child);
    }
  }

  public static class TrieNode {
    private static final char END = '#';
    private char c;
    private TrieNode parent;
    private List<TrieNode> children = new ArrayList<>();

    public TrieNode() {
    }

    public TrieNode(char c, TrieNode parent) {
      this.c = c;
      this.parent = parent;
    }

    public void addText(String str) {
      if (str == null) {
        return;
      }
      if (str.length() == 0) {
        addChild(END);
        return;
      }
      TrieNode newNode = addChild(str.charAt(0));
      newNode.addText(str.substring(1));
    }

    public TrieNode addChild(char c) {
      for (TrieNode node : children) {
        if (node.c == c) {
          return node;
        }
      }
      TrieNode newNode = new TrieNode(c, this);
      this.children.add(newNode);
      return newNode;
    }

    public boolean isEnd() {
      return c == END;
    }

    public List<TrieNode> getChildren() {
      return children;
    }

    public String getText() {
      String result = "";
      TrieNode actual = isEnd() ? this.parent : this;
      for (; actual != null; actual = actual.parent) {
        result = actual.c + result;
      }
      return result;
    }

    public TrieNode findChild(char c) {
      for (TrieNode node : children) {
        if (node.c == c) {
          return node;
        }
      }
      return null;
    }

    public void visitAll(ChildNodeCommand command) {
      if (isEnd()) {
        return;
      }
      command.execute(this);
      for (TrieNode child : children) {
        child.visitAll(command);
      }
    }
  }

  private static interface ChildNodeCommand {
    void execute(TrieNode node);
  }
}
