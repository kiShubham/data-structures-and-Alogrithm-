/**
 * * enqueue() — Adds an element to the queue
 * todo: Array.unshift(x) ; or Array.push(x)
 * * dequeue() — Removes and returns the first item entered in the queue
 * todo: Array.pop() ;pointer to last element of array; or Array.shift()
 * * isEmpty() — Returns true or false based on if the queue is empty or not
 * todo: make a fn to check array.length
 * * front() — Returns the front element of the queue
 * todo: array[array.length-1]
 * * print() — Returns all the elements of the queue
 * todo: make a fn to print all elements of array  ;console.log(array)
 */

// using class
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(ele) {
    this.queue.push(ele);
  }
  dequeue() {
    if (this.isEmpty()) return "underflow,cannot perform dequeue";
    else this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  front() {
    //peek
    if (this.isEmpty()) return "No element in Queue";
    else return this.queue[0];
  }
  size() {
    return this.queue.length;
  }
  printQueue() {
    let str = "";
    if (this.isEmpty()) return "No element in Queue";
    this.queue.forEach((ele) => (str += ele + " "));
    return "Queue : " + str;
  }
}

const myQueue = new Queue();

// myQueue.enqueue(4);
// myQueue.enqueue(8);
// myQueue.enqueue(5);
// myQueue.enqueue(6);
// myQueue.enqueue(7);
// console.log(myQueue.printQueue());

// myQueue.dequeue();
// console.log(myQueue.printQueue());
// console.log(myQueue.front());
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.printQueue());
// console.log(myQueue.dequeue());
// console.log(myQueue.front());

/**
 * * priority Queue ;
 */
class PriorityQueue {
  constructor() {
    this.items = [];
  }
  enqueue(element, priority) {
    //item ={elemnet:"b",priority:1};
    const item = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (item.priority < this.items[i].priority) {
        console.log(item);
        this.items.splice(i, 0, item);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(item);
    }
  }
  dequeue() {
    if (this.isEmpty()) return "underflow,cannot perform dequeue";
    else this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  front() {
    //peek
    if (this.isEmpty()) return "No element in Queue";
    else return this.items[0];
  }
  size() {
    return this.items.length;
  }
  printQueue() {
    let str = "";
    if (this.isEmpty()) return "No element in Queue";
    this.items.forEach((ele) => (str += ele.element + " "));
    return "Queue : " + str;
  }
}
const myQueue1 = new PriorityQueue();
myQueue1.enqueue(20, 2);
myQueue1.enqueue(40, 4);
myQueue1.enqueue(10, 1);
myQueue1.enqueue(30, 3);
// myQueue1.enqueue(30, 2);
// myQueue1.enqueue(20, 3);
// myQueue1.enqueue(10, 1);
console.log(myQueue1.printQueue());
