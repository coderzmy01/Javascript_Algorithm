function fibo(n) {
  let res = [1, 1];
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res;
}

// 示例用法
const result = fibo(5);
console.log(result); // 输出 [1, 1, 2, 3, 5]
