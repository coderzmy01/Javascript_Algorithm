function quickSort(arr) {
  if (arr.length < 2) return arr;
  let right = [];
  let left = [];
  let last = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (last > arr[i]) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), last, ...quickSort(right)];
}

console.log(quickSort([1, 2, 45, 6, 73, 2, 1, 56, 7, 8]));
