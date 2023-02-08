class Queue {
    constructor() {
      this.enqueueStack = [];
      this.dequeueStack = [];
    }enqueue(element) {
      this.enqueueStack.push(element);
    }dequeue() {
      if (this.dequeueStack.length === 0) {
        while (this.enqueueStack.length > 0) {
          this.dequeueStack.push(this.enqueueStack.pop());
        }}
      return this.dequeueStack.pop();
    }}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
