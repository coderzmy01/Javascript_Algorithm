var removeDuplicates = function (nums) {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    const element = nums[fastIndex];
    if (nums[slowIndex] !== element) {
      nums[++slowIndex] = element;
    }
  }
  return slowIndex;
};
