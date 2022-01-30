function well(x){
  let res = x.filter(i => i === 'good').length;
  return res === 0 ? 'Fail!' : res <= 2 ? 'Publish!' : 'I smell a series!';
}