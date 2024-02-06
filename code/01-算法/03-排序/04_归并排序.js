function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const temp = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) temp.push(left.shift());
    else temp.push(right.shift());
  }
  return [...temp, ...left, ...right];
}

console.log(mergeSort([1, 2, 3, 56, 2, 36, 7, 2, 6, 83, 7, 89, 2]));
