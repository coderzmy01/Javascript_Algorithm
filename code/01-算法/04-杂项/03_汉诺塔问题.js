function towerOfHanoi(n, from, to, use) {
  if (n == 1) {
    console.log(`move disk ${n} from ${from} to ${to}`);
    return;
  }
  towerOfHanoi(n - 1, from, use, to);
  console.log(`move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, use, to, from);
}
towerOfHanoi(5,"a","b","c")