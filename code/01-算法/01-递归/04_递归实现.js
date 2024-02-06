// function recursionFi(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recursionFi(n - 2) + recursionFi(n - 1);
// }
// console.log(recursionFi(3));

// 递归实现阶乘
function recursionFactory(n) {
  if (n < 2) return 1;
  return n * recursionFactory(n - 1);
}
console.log(recursionFactory(2));
console.log(recursionFactory(3));
console.log(recursionFactory(4));
