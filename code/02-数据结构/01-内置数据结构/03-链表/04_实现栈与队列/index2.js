const LinkList = require('../03_尾指针链表/index');
class LinkListQueue {
  constructor() {
    this.list = new LinkList();
  }
  enqueue(val) {
    this.list.append(val);
  }
  dequeue() {
    this.list.removeFromStart();
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

// 创建队列
const queue = new LinkListQueue();

// 测试 enqueue 方法
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('队列内容：');
queue.print(); // 预期输出：1 2 3

// 测试 peek 方法
console.log('队列头部元素：', queue.peek()); // 预期输出：1

// 测试 dequeue 方法
queue.dequeue();
console.log('移除一个元素后的队列内容：');
queue.print(); // 预期输出：2 3

// 测试 isEmpty 方法
console.log('队列是否为空：', queue.isEmpty()); // 预期输出：false

// 测试 getSize 方法
console.log('队列大小：', queue.getSize()); // 预期输出：2
