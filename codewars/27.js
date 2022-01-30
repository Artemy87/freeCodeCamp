function makeNegative(num) {
  return num === 0 ? 0 : Math.sign(num) === -1 ? num : num * -1;
}