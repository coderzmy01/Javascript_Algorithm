function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let n = arr.length;
    let isOk = true;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isOk = false;
      }
    }
    if ((isOk = false)) {
      break;
    }
  }
  return arr;
}
// function bubbleSort(array) {
//   for (let j = 0; j < array.length; j++) {
//     let complete = true;
//     for (let i = 0; i < array.length - 1 - j; i++) {
//       // 比较相邻数
//       if (array[i] > array[i + 1]) {
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//         complete = false;
//       }
//     }
//     // 没有冒泡结束循环
//     if (complete) {
//       break;
//     }
//   }
//   return array;
// }
function bubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(bubbleSort2([9, 2, 3, 45, 64, 34, 56, 73, 3, 1]));
