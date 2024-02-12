class TreeNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor(params) {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(val) {
    const newNode = new TreeNode(val);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, val) {
    if (!root) {
      return false;
    }
    if (root.value === val) {
      return true;
    } else if (val < root.value) {
      return this.search(root.left, val);
    } else {
      return this.search(root.right, val);
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(30);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 40));
