import java.util.concurrent.locks.*;
import java.util.stream.*;

public class DeadlockedThreads {

  public static void main(String[] args) {
    Lock lockA = new ReentrantLock();
    Lock lockB = new ReentrantLock();
    
    IntStream.range(0, 4).forEach((val) -> {
      Runnable runnable = () -> {
        String name = Thread.currentThread().getName();
        boolean reverse = Integer.parseInt(name.substring(name.length() - 1)) > 2;
        System.out.println(name + " started. reversed = " + reverse);
        
        Lock lock1 = !reverse ? lockA : lockB;
        Lock lock2 = !reverse ? lockB : lockA;
        String lock1Name = lock1 == lockA ? "A" : "B";
        String lock2Name = lock2 == lockA ? "A" : "B";
        
        lock1.lock();
        System.out.println(name + " obtained " + lock1Name);
        lock2.lock();
        System.out.println(name + " obtained " + lock2Name);
        lock2.unlock();
        System.out.println(name + " released " + lock2Name);
        lock1.unlock();
        System.out.println(name + " released " + lock1Name);
        
        System.out.println(name + " finished.");
      };
      
      new Thread(runnable, "#" + val).start();
    });
  }

}
