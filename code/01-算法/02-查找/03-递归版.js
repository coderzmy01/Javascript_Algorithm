function BinarySearch(n, t) {
  return search(n, t, 0, n.length - 1);
}
function search(arr, target, left, right) {
  if (left > right) return -1;
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] == target) return middle;
  if (arr[middle] > target) {
    return search(arr, target, left, middle - 1);
  } else {
    return search(arr, target, middle + 1, right);
  }
}

// 测试数据1：目标元素在数组中
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 5;
console.log(`Index of ${target1}: ${BinarySearch(array1, target1)}`); // 应该输出 4

// 测试数据2：目标元素不在数组中
let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let target2 = 9;
console.log(`Index of ${target2}: ${BinarySearch(array2, target2)}`); // 应该输出 -1

// 测试数据3：空数组
let array3 = [];
let target3 = 7;
console.log(`Index of ${target3}: ${BinarySearch(array3, target3)}`); // 应该输出 -1
