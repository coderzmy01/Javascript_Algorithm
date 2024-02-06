function insertSort(arr) {
  let sortedArr = [arr[0]];
  let unSortedArr = arr.slice(1);
  for (let i = 0; i < unSortedArr.length; i++) {
    let inserted = false; // 添加一个标志位
    for (let j = sortedArr.length - 1; j >= 0; j--) {
      if (sortedArr[j] > unSortedArr[i]) {
        sortedArr[j + 1] = sortedArr[j];
      } else {
        sortedArr[j + 1] = unSortedArr[i];
        inserted = true; // 设置标志位为true表示已插入
        break; // 跳出内层循环
      }
    }
    if (!inserted) {
      sortedArr[0] = unSortedArr[i]; // 如果未插入，说明当前元素最小，放在首位
    }
  }
  return sortedArr;
}

function insertSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j--];
    }
    arr[j + 1] = cur;
  }
  return arr;
}

console.log(insertSort2([9, 2, 3, 45, 64, 34, 56, 73, 3, 1]));
