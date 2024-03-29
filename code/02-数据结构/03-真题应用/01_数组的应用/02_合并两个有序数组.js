function mergeTwoArr(nums1, m, nums2, n) {
  let p1 = m - 1,
    p2 = n - 1,
    p = m + n - 1;
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
  return nums1;
}
console.log(mergeTwoArr([1, 2, 4, 6, 10], 5, [3, 6, 7, 9, 11], 5));
