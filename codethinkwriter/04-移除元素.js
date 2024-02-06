function removeVal(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === val) {
      for (let j = index + 1; j < arr.length; j++) {
        arr[j - 1] = arr[j];
      }
      index--;
      arr.length--;
    }
  }
  return arr.length;
}
console.log(removeVal([2, 1], 2));
var removeElement = function (nums, val) {
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    const element = nums[fastIndex];
    if (val !== element) {
      nums[slowIndex++] = nums[fastIndex];
    }
  }
  return slowIndex;
};
