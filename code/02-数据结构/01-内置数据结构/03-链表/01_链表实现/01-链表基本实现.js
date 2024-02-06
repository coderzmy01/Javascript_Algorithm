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
}
