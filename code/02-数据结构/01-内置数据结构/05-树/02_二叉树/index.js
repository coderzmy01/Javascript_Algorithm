// 二叉树结点的构造函数
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function preOrder(root) {
  if (!root) return;
  console.log('正在遍历', root);
  preOrder(root.left);
  preOrder(root.right);
}

function inOrder(root) {
  if (!root) return;
  inOrder(root.left);
  console.log('正在遍历', root);
  inOrder(root.right);
}

function postorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 递归遍历左子树
  postorder(root.left);
  // 递归遍历右子树
  postorder(root.right);
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val);
}
