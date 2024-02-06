// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
var searchInsert = function (nums, target) {
  var left,
    mid = 0,
    right = nums.length - 1;
  while (left <= right) {
    mid = left + Math.floor((right - left) >> l);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right + 1;
};
console.log(searchInsert([1, 3, 5, 6], 5));
