function onesComplement(n) {
  return n.split('').map(n => n == 0 ? 1 : 0).join('')
};