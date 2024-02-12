// function findT(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let j = 0;
//     let sum = nums[j] + nums[i];
//     while (j !== nums.length && sum != target) {
//       j++;
//     }
//     if (sum === target) return [i, j];
//   }
// }

const sumTwo = (arr, t) => {
  let m1 = new Map();
  for (let i = 0; i < arr.length; i++) {
    let v = m1.get(t - arr[i]);
    if (v !== undefined) {
      return [v, i];
    }
    m1.set(arr[i], i);
  }
};
console.log(sumTwo([2, 7, 12, 15], 19));
