function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(18));
console.log(isPrime(36));
console.log(isPrime(47));
