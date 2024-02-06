const LinkList = require('../03_尾指针链表/index');

class LinkListStack {
  constructor() {
    this.list = new LinkList();
  }
  push(val) {
    this.list.prepend(val);
  }
  pop() {
    return this.list.removeFromStart();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.size;
  }
  print() {
    return this.list.print();
  }
}
const Stack = new LinkListStack();
console.log(Stack.isEmpty());
Stack.push(1);
Stack.push(2);
Stack.push(3);
console.log(Stack.getSize())
Stack.print();
Stack.pop();
Stack.print();
