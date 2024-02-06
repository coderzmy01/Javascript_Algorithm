function CartesianProduct(a, b) {
  let i = 0;
  let res = [];
  while (i < a.length) {
    for (let j = 0; j < b.length; j++) {
      res.push([a[i], b[j]]);
    }
    i++;
  }
  return res;
}
console.log(CartesianProduct([12, 34, 5], [1, 2, 4]));
