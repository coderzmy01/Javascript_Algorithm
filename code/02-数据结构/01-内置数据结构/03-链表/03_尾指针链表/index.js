class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  print() {
    let str = '';
    let prev = this.head;
    while (prev) {
      str += prev.value;
      prev = prev.next;
    }
    console.log(str);
  }
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromStart() {
    if (this.isEmpty()) return;
    const value = this.head.value;
    if (this.head === this.tail) {
      // 链表中只有一个节点的情况
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return value;
  }
  removeFromEnd() {
    if (this.isEmpty()) return;
    let val;
    if (this.size == 1) {
      val = this.tail.value;
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      val = this.tail.value;
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return val;
  }
}
// ?测试
// const list = new LinkList();
// list.append(1);
// list.append(2);
// list.prepend(0);
// list.print();
// list.removeFromEnd();
// list.print();
// // console.log(list.print());
// list.removeFromStart();
// list.print();
// console.log(list.print());
module.exports = LinkList;
