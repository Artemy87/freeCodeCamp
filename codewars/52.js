function digitize(n) {  
  let arr = [];
  String(n).split('').map(i => arr.push(Number(i)));
  
  return arr.reverse()
};