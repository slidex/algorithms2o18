import java.util.function.*;

public class LinkedListFindNthFromEndRecursive {
  public void printNthFromEnd(Node head, int stepsFromEnd) {
    distanceAndDo(head, stepsFromEnd, (Node node) -> System.out.println(node.getValue()));
  }

  private int distanceAndDo(Node head, int stepsFromEnd, Consumer<Node> func) {
    if (head.getNext() == null) {
      return 1;
    }
    int distance = distanceAndDo(head.next, stepsFromEnd, func) + 1;
    if (distance == stepsFromEnd && func != null) {
      func.accept(head);
    }
    return distance;
  }

  public static void main(String[] args) {
    Node head = new Node(9, new Node(2, new Node(7, new Node(6, null))));
    new LinkedListFindNthFromEndRecursive().printNthFromEnd(head, 3);
  }

  public static class Node {
    private int value;
    private Node next;

    public Node(int value, Node next) {
      this.value = value;
      this.next = next;
    }

    public int getValue() {
      return value;
    }

    public Node getNext() {
      return next;
    }
  }
}
