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
    // if (this.isEmpty()) this.head = node;
    // else {
    //   node.next = this.head;
    //   this.head = node;
    // }
    node.next = this.head;
    this.head = node;
    this.size++;
  }
}
