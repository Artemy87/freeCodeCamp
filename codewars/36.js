function findDifference(a, b) {
  let first = a[0] * a[1] * a[2];
  let second = b[0] * b[1] * b[2];
  let max = Math.max(first, second);
  let min = Math.min(first, second);
  return max - min;
}