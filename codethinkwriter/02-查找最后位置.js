var searchRange = function (nums, target) {
  function getLeftBorder(nums, target) {
    var left = 0,
      mid = 0,
      right = nums.length - 1,
      leftBorder = -2;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
        leftBorder = right;
      }
    }
    return leftBorder;
  }
  function getRightBorder(nums, target) {
    var left = 0,
      mid = 0,
      right = nums.length - 1,
      rightBorder = -2;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
        rightBorder = left;
      }
    }
    return rightBorder;
  }
  if (
    getLeftBorder(nums, target) === -2 ||
    getRightBorder(nums, target) === -2
  ) {
    return [-1, -1];
  } else if (getRightBorder(nums, target) - getLeftBorder(nums, target) > 1) {
    return [getLeftBorder(nums, target) + 1, getRightBorder(nums, target) - 1];
  }
  return [-1, -1];
};
