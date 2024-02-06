class Queue {
  items = [];
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  peek() {
    return this.isEmpty() ? null : this.items[this.size() - 1];
  }
  print() {
    console.log(this.items.toString());
  }
}
let q1 = new Queue()
q1.enqueue(1)
q1.enqueue(12)
console.log(q1);
q1.dequeue()
console.log(q1);
q1.print()
