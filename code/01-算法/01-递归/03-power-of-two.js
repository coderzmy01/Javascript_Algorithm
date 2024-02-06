function isPowerOfTwo(n) {
  // 判断 n 是否为正整数
  if (n <= 0 || !Number.isInteger(n)) {
    return false;
  }

  // 判断 n&(n-1) 是否等于 0
  return (n & (n - 1)) === 0;
}

// 测试例子
console.log(isPowerOfTwo(16)); // 输出 true，因为16是2的4次方
console.log(isPowerOfTwo(5)); // 输出 false，因为5不是2的整数次方
