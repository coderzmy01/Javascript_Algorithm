class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkList {
  constructor(params) {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  //? 插入
  insert(value, idx) {
    if (idx < 0 || idx > this.size) return;
    else if (idx === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 1; i < idx - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  // ? 给定位置移除
  removeFrom(idx) {
    let removeNode;
    if (idx < 0 || idx >= this.size) return null;
    if (idx === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode;
  }
  // ? 给定值删除
  remove(value) {
    if (this.isEmpty()) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        prev.next = prev.next.next;
        this.size--;
      }
      return;
    }
  }
  search(val) {
    if (this.isEmpty()) return -1;
    let i = 0;
    let cur = this.head;
    while (cur) {
      if (cur.value === val) return i;
      i++;
      cur = cur.next;
    }
    return -1;
  }
  print() {
    if (this.isEmpty()) console.log('list is empty');
    else {
      let list = '';
      let cur = this.head;
      while (cur) {
        list += cur.value;
        cur = cur.next;
      }
      console.log(list);
    }
  }
}

//* 测试
const list = new LinkList();
list.insert(10, 0);
list.insert(20, 1);
list.insert(40, 2);
list.print();
console.log(list.search(2));
console.log(list.search(10));
