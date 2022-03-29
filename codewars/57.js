const createPhoneNumber = numbers => {
  n = numbers.join('');
  return `(${n.substring(0, 3)}) ${n.substring(3, 6)}-${n.substring(6)}`
}