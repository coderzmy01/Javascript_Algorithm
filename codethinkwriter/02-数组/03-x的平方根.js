var mySqrt = function (x) {
  if (x == 0) return 0;
  if (x == 1) return 1;
  let left = 1,
    right = Math.floor(x / 2),
    mid = 0;
  while (left <= right) {
    mid = left + ((left - right) >> 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
    return mid;
  }
  return left
};
