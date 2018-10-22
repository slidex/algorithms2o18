import java.util.*;

public class RadixSort {
  public static void main(String[] args) {
    int[] array = new int[]{78,22,11,1,2,3,4,9,8,7,6,5,53,77};
    int[] sorted = radixSort(array, 8);
    System.out.println(Arrays.toString(sorted));
  }

  /** Radix sort, in place. */
  public static int[] radixSort(int[] array, int bits) {
    if (array == null || array.length < 2) {
      return array;
    }

    for (int pos = 0; pos < bits; pos++) {
      int mask = 1 << pos;
      int zerosOnLeft = 0;
      for (int i = 0; i < array.length; i++) {
        if ((array[i] & mask) == 0) {
          // Move it before 1s.
          move(array, i, zerosOnLeft);
          zerosOnLeft++;
        }
      }
    }
    return array;
  }

  /** Move item on j to index i shifting items in between to the right. j >= i */  
  private static void move(int[] array, int j, int i) {
    if (j <= i) {
      return;
    }
    for (int toMove = j - 1; toMove >= i; toMove--) {
      swap(array, toMove, toMove + 1);
    }
  }
  
  private static void swap(int[] array, int i, int j) {
    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
