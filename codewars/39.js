function doubleChar(str) {
  let res = str.split('');
  res = res.map(i => i + i);
  return res.join('')
}