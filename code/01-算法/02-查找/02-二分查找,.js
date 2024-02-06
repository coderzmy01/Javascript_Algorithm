function BinarySearch(n, t) {
  let left = 0,
    right = n.length - 1,
    middle;
  while (left <= right) {
    middle = Math.floor((right + left) / 2);
    if (n[middle] == t) return middle;
    // middle>n 说明在左边
    if (n[middle] > t) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

// O(logn)