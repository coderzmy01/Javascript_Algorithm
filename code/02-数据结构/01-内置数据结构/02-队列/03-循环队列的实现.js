class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.curLength = 0;
    this.front = -1;
    this.rear = -1;
  }
  isFull() {
    return this.curLength === this.capacity;
  }
  isEmpty() {
    return this.curLength === 0;
  }
  enqueue(item) {
    if (!this.isFull()) {
      this.curLength++;
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      if (this.front === -1) this.front++;
    }
  }
  dequeue() {
    if (this.isEmpty()) return null;
    this.curLength--;
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.front];
  }
  print() {
    if (this.isEmpty()) {
      console.log('queue is empty');
    } else {
      let str = '';
      let i;
      for (i = this.front; i != this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i];
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const t1 = new CircularQueue(4);
t1.enqueue(1);
t1.enqueue(2);
t1.enqueue(3);
t1.enqueue(4);
t1.print();
t1.dequeue();
t1.enqueue(7);
t1.print()
