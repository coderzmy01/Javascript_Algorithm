function climbingStairs(n) {
  if (n < 3) return n;
  return climbingStairs(n - 1) + climbingStairs(n - 2);
}

function climbingStairs2(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i++; i < n) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
}
