---
layout: post
title: 【Java】Java中的线程、线程池
permalink: 
category: blog
tags: [Java]
repository: onlylemi/notes/tree/master/Java
period: 
organization-name: 
organization-url: 
excerpt: Java中的线程、线程池

---

* **线程** —— 操作系统独立调度和分派的基本单位；一个标准的线程由线程ID，指令指针，寄存器，堆栈组成；线程除了必不可少的那点资源，本身不拥有其他资源，但是线程可以共享父进程的资源；一个进程中至少一个线程。
* **多线程** —— 解决多任务同时执行的需求，合理使用CPU资源。
* **线程池** —— 开辟一块内存空间，存放许多为死亡的线程，池中线程执行调度有池管理器来处理。当有线程任务时，从池中取一个，执行完成后线程对象归池，这样就可以避免反复创建线程对象所带来的性能开销，节省了系统的资源。

## 线程

### 创建线程

* 继承 `Thread` 类重写 `run()` 方法，并同过 `start()` 来启动线程

```java
class MyThread extends Thread {

    @Override
    public void run() {
        super.run();
        // 进行线程中的操作
    }
}

MyThread t = new MyThread();
t.start();
```

* 实现 `runnable` 接口

```java
public class MyThread implements Runnable {

    @Override
    public void run() {
    	// 进行线程中的操作
    }

    public static void main(String[] args){
    	Thread t = new Thread(this);
		t.start();
    }
}
```

**用Runnable还是Thread？**

> * 由于Java不能多继承，因此使用Runnable接口更加灵活。
* Runnable可以实现资源的共享，而Thread不行。

**线程和进程有什么区别？**

> * 一个进程是一个独立的运行环境，它可以被看作一个程序或者一个应用。而线程是在进程中执行的一个任务。一个进程可以有很多线程，每条线程并行执行不同的任务。
* 不同的进程使用不同的内存空间，而所有的线程共享一片相同的内存空间。

>> 别把它和栈内存搞混，每个线程都拥有单独的栈内存用来存储本地数据。

### 线程的状态

* NEW（新状态） —— 是一个空线程状态，还没有分配资源。在调用 start() 方法前的状态
* RUNNABLE（可运行状态） —— 调用 start() 后的状态
* BLOCKED（阻塞状态、被中断运行） —— 线程正在等待其它的线程释放同步锁
* WAITING（等待状态） —— 
* TIMED_WAITING（定时等待状态）
* TERMINATED（终止状态、死亡状态） —— 这个状态下表示 该线程的run方法已经执行完毕了, 基本上就等于死亡了(当时如果线程被持久持有, 可能不会被回收)

### 方法

* **wait()** —— 使一个线程处于等待状态，并且释放所持有的对象的lock。
* **notify()** —— 唤醒一个处于等待状态的线程，注意的是在调用此方法的时候，并不能确切的唤醒某一个等待状态的线程，而是由JVM确定唤醒哪个线程，而且不是按优先级。
* **notityAll()** —— 唤醒所有处入等待状态的线程，注意并不是给所有唤醒线程一个对象的锁，而是让它们竞争
* **sleep()** —— 使一个正在运行的线程处于睡眠状态，是一个静态方法，调用此方法要捕捉InterruptedException异常。
* **join()** —— 主要是让调用该方法的 Thread 完成 run() 方法里面的东西后，再执行 join() 方法后面的代码（优点异步变同步的概念）
* **yield()** —— 线程放弃运行，将CPU的控制权让出。

> wait()、notify()、notifyAll() 都是 Object 类中的 final native 方法；调用这三个方法中任意一个，当前线程必须是锁的持有者，如果不是会抛出一个 IllegalMonitorStateException 异常。

**wait() 与 Thread.sleep(long time) 的区别**

> * wait() 在 Object 类，sleep() 在 Thread 类
* wait() 方法进入等待状态时会释放同步锁，而 sleep() 方法不会释放同步锁；
	* sleep() 在指定的毫秒数内让当前正在执行的线程休眠（暂停执行），时间到了之后会再次执行；
	* wait() 方法使实体所处线程暂停执行，从而使对象进入等待状态，直到被 notify()、notifyAll() 方法通知之后才会再次执行。notify() 之前线程是需要获得 lock，所以 wait()、notify()、notifyAll()方法都必须写在同步块中synchronized(lockobj) {...}

### synchronized

当线程和其他线程要共享一些资源时，尤其是可能修改这些资源的时候，就需要对这些线程进行同步。

### volatile

* volatile 变量可以保证下一个读取操作会在前一个写操作之后发生。线程都会直接从内存中读取该变量并且不缓存它。
* volatile屏蔽指令重排序（happen-before）

### ThreadLocal

* 多线程，多实例。一个线程对应一个实例。
* 每个线程内，使用同一个实例。
* 内部是一个Map结构（Values是ThreadLocal类的一个静态内部类，它实现了键值对的设置和获取（对比Map对象来理解）），key是ThreadLocal对象，value是你所设置的对象set(T value)。

> **关于Looper类是如何利用ThreadLocal的**
1. ThreadLooper的对象 sThreadLocal 是一个静态变量。
2. 每个线程在创建looper对象时，sThreadLocal都会将新建的looper对象set()一遍。
3. 每个线程在调用Looper.myLooper()时，就用调用sThreadLocal的get()方法，获得当前线程的looper对象。

### 如何避免死锁

死锁是指两个或两个以上的进程在执行过程中，因争夺资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去。这是一个严重的问题，因为死锁会让你的程序挂起无法完成任务，死锁的发生必须满足以下四个条件：

* 互斥条件：一个资源每次只能被一个进程使用。
* 请求与保持条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放。
* 不剥夺条件：进程已获得的资源，在末使用完之前，不能强行剥夺。
* 循环等待条件：若干进程之间形成一种头尾相接的循环等待资源关系。

### 判断线程是否拥有锁

thread.holdsLock(obj)方法。可以判断该线程是否拥有obj对象的锁。

**Runnable 和 Callable 的区别**

> * Runnable 类翻译：[https://github.com/onlylemi/android-source-code-translate/blob/master/java/lang/Runnable.java](https://github.com/onlylemi/android-source-code-translate/blob/master/java/lang/Runnable.java)
* Callable 类翻译：[https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/Callable.java](https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/Callable.java)

```java
public interface Runnable {
    public void run();
}

public interface Callable<V> {
    V call() throws Exception;
}
```

> * Callable 接口下的方法是 call()，Runnable 接口的方法是 run()
* Callable 的任务执行后可返回值，而 Runnable 的任务是不能返回值的
* call() 方法可以抛出异常，run()方法不可以的
* 运行 Callable 任务可以拿到一个 `Future` 对象，表示异步计算的结果。它提供了检查计算是否完成的方法，以等待计算的完成，并检索计算的结果。通过 Future 对象可以了解任务执行情况，可取消任务的执行，还可获取执行结果。
* 单独使用 Callable，无法在新线程中(new Thread(Runnable r))使用，Thread 类只支持 Runnable。不过 Callable 可以使用 `ExecutorService`

### Future

> Future 翻译：[https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/Future.java](https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/Future.java)

```java
public interface Future<V> {

    boolean cancel(boolean mayInterruptIfRunning);

    boolean isCancelled();

    boolean isDone();

    V get() throws InterruptedException, ExecutionException;

    V get(long timeout, TimeUnit unit)
        throws InterruptedException, ExecutionException, TimeoutException;
}
```

* cancel() —— 取消任务，如果任务已经完成、已经取消、或其他原因不能被取消返回false；如果调用成功，任务还没有开始，则任务不再运行。如果任务已经启动，参数决定是否应该终止任务。
* isCancelled() —— 取决于 cancel() 的放回值
* isDone() —— 任务结束就会返回true（正常完成、异常或取消）
* get() —— 获取结果（等待完成后）

### FutureTask

> FutureTask 翻译：[https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/FutureTask.java](https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/FutureTask.java)

FutureTask 实现了 Runnable 和 Future，所以兼顾两者优点，既可以在 Thread 中使用，又可以在 ExecutorService 中使用。

```java
public class FutureTask<V> implements RunnableFuture<V> {
    ...
}

public interface RunnableFuture<V> extends Runnable, Future<V> {
    void run();
}
```

### 线程调度策略

* 抢占式调度策略

Java运行时系统的线程调度算法是抢占式的。Java运行时系统支持一种简单的固定优先级的调度算法。如果一个优先级比其他任何处于可运行状态的线程都高的线程进入就绪状态，那么运行时系统就会选择该线程运行。新的优先级较高的线程抢占了其他线程。但是Java运行时系统并不抢占同优先级的线程。换句话说，Java运行时系统不是分时的。然而，基于Java Thread类的实现系统可能是支持分时的，因此编写代码时不要依赖分时。当系统中的处于就绪状态的线程都具有相同优先级时，线程调度程序采用一种简单的、非抢占式的轮转的调度顺序。

* 时间片轮转调度策略

有些系统的线程调度采用时间片轮转调度策略。这种调度策略是从所有处于就绪状态的线程中选择优先级最高的线程分配一定的CPU时间运行。该时间过后再选择其他线程运行。只有当线程运行结束、放弃(yield)CPU或由于某种原因进入阻塞状态，低优先级的线程才有机会执行。如果有两个优先级相同的线程都在等待CPU，则调度程序以轮转的方式选择运行的线程。

## 线程池

Java里面线程池的顶级接口是 Executor，不过真正的线程池接口是 ExecutorService， ExecutorService 的默认实现是 ThreadPoolExecutor；普通类 Executors 里面调用的就是 ThreadPoolExecutor。

> * Executor 类翻译：[https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/Executor.java](https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/Executor.java)
* ExecutorService 类翻译：[https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/ExecutorService.java](https://github.com/onlylemi/android-source-code-translate/blob/master/java/util/concurrent/ExecutorService.java)

```java
public interface Executor {
    void execute(Runnable command);
}

public interface ExecutorService extends Executor {
    void shutdown();
    List<Runnable> shutdownNow();

    boolean isShutdown();
    boolean isTerminated();

    <T> Future<T> submit(Callable<T> task);
    <T> Future<T> submit(Runnable task, T result);
    Future<?> submit(Runnable task);
    ...
}

public class Executors {
    public static ExecutorService newCachedThreadPool() {
            return new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, 
                            new SynchronousQueue<Runnable>());
    }
    //...
}
```

### 优点

* 避免线程的创建和销毁带来的性能开销。
* 避免大量的线程间因互相抢占系统资源导致的阻塞现象。
* 能够对线程进行简单的管理并提供定时执行、间隔执行等功能。
* 限制线程的数量并且可以回收再利用这些线程

### Executors 提供四种线程池

* **newCachedThreadPool** —— 是一个可根据需要创建新线程的线程池，但是在以前构造的线程可用时将重用它们。对于执行很多短期异步任务的程序而言，这些线程池通常可提高程序性能。调用 execute() 将重用以前构造的线程（如果线程可用）。如果现有线程没有可用的，则创建一个新线程并添加到池中。终止并从缓存中移除那些已有 60 秒钟未被使用的线程。因此，长时间保持空闲的线程池不会使用任何资源。注意，可以使用 ThreadPoolExecutor 构造方法创建具有类似属性但细节不同（例如超时参数）的线程池。
* **newSingleThreadExecutor** 创建是一个单线程池，也就是该线程池只有一个线程在工作，所有的任务是串行执行的，如果这个唯一的线程因为异常结束，那么会有一个新的线程来替代它，此线程池保证所有任务的执行顺序按照任务的提交顺序执行。
* **newFixedThreadPool** 创建固定大小的线程池，每次提交一个任务就创建一个线程，直到线程达到线程池的最大大小，线程池的大小一旦达到最大值就会保持不变，如果某个线程因为执行异常而结束，那么线程池会补充一个新线程。
* **newScheduledThreadPool** 创建一个大小无限的线程池，此线程池支持定时以及周期性执行任务的需求。

### ThreadPoolExecutor

```java
public ThreadPoolExecutor(int corePoolSize,
                          int maximumPoolSize,
                          long keepAliveTime,
                          TimeUnit unit,
                          BlockingQueue<Runnable> workQueue,
                          ThreadFactory threadFactory) {
    this(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, 
        threadFactory, defaultHandler);
}
```

* corePoolSize —— 线程池的核心线程数，一般情况下不管有没有任务都会一直在线程池中一直存活，只有在 ThreadPoolExecutor 中的方法 allowCoreThreadTimeOut(boolean value) 设置为 true 时，闲置的核心线程会存在超时机制，如果在指定时间没有新任务来时，核心线程也会被终止，而这个时间间隔由第3个属性 keepAliveTime 指定。
* maximumPoolSize —— 线程池所能容纳的最大线程数，当活动的线程数达到这个值后，后续的新任务将会被阻塞。
* keepAliveTime —— 控制线程闲置时的超时时长，超过则终止该线程。一般情况下用于非核心线程，只有在 ThreadPoolExecutor 中的方法 allowCoreThreadTimeOut(boolean value) 设置为 true时，也作用于核心线程。
* unit —— 用于指定 keepAliveTime 参数的时间单位，TimeUnit 是个 enum 枚举类型，常用的有：TimeUnit.HOURS(小时)、TimeUnit.MINUTES(分钟)、TimeUnit.SECONDS(秒) 和 TimeUnit.MILLISECONDS(毫秒)等。
* workQueue —— 线程池的任务队列，通过线程池的 execute(Runnable command) 方法会将任务 Runnable 存储在队列中。
* threadFactory —— 线程工厂，它是一个接口，用来为线程池创建新线程的。

### 线程池的关闭

* shutdown() —— 不会立即的终止线程池，而是要等所有任务缓存队列中的任务都执行完后才终止，但再也不会接受新的任务。
* shutdownNow() —— 立即终止线程池，并尝试打断正在执行的任务，并且清空任务缓存队列，返回尚未执行的任务。
