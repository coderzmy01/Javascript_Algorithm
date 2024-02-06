function MaxLength(nums, s) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= s) {
        maxLength = j - i + 1 > maxLength ? maxLength : j - i + 1;
        break;
      }
    }
  }
  return maxLength;
}
var minSubArrayLen = function (target, nums) {
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= target) {
        maxLength = j - i + 1 > maxLength ? maxLength : j - i + 1;
        break;
      }
    }
  }
  return maxLength;
};
