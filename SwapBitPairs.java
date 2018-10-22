/*
 * a,b
 * a, a^b
 * (a^b)^a=b,(a^b)^b=a
 * 
 * b = a^b;
 * a = a^b;
 * b = a^b;
 * 
 * 11101 -> 101110
 *
 * 1001
 * 0010 (<< 1)
 * xor
 * 1011
 */
public class SwapBitPairs {

  public static int swapBitPairs(int num) {
    int mask = (num << 1) & 0xAAAA_AAAA;
    num ^= mask;
    
    mask = (num >> 1) & 0x5555_5555;
    num ^= mask;
    
    mask = (num << 1) & 0xAAAA_AAAA;
    num ^= mask;
    
    return num;
  }

  public static int swapBitPairsAlt(int num) {
    int mask1 = (num << 1) & 0xAAAA_AAAA;
    int mask2 = (num >> 1) & 0x5555_5555;
    return mask1 | mask2;
  }
  
  public static void main(String[] args) {
    int result = swapBitPairs(0b11101);
    System.out.println(Integer.toBinaryString(result));
    
    result = swapBitPairsAlt(0b11101);
    System.out.println(Integer.toBinaryString(result));
  }
}
