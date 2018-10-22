import java.util.concurrent.*;

/*
 * create thread pool with capacity of 1
 * create thread in the pool the creates a new thread in the pool
 */
public class DeadlockedPool {
  
  public static void main(String[] args) {
    ExecutorService pool = Executors.newFixedThreadPool(1);
    pool.submit(new Logic(pool));
  }

  private static class Logic implements Runnable {
    private ExecutorService executor;
    
    public Logic(ExecutorService executor) {
      this.executor = executor;
    }
    
    public void run() {
      log("1st started.");
      try {
        executor.submit(() -> log("2nd executed.")).get(); // key part
      } catch (InterruptedException | ExecutionException e) {
        log("Error.");
      }
      log("1st ended.");
    }
    
    private void log(String msg) {
      System.out.println(msg);
    }
  }
}
