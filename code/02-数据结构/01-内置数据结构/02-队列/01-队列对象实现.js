class Queue {
  items = {};
  rear = 0;
  front = 0;
  enqueue(item) {
    this.items[this.rear++] = item;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front++];
    return item;
  }
  isEmpty() {
    return this.rear - this.front == 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
}
