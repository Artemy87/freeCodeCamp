function array(arr){
  let res = arr.split(',').slice(1, -1);
  return res.length === 0 ? null : res.join(' ');
}
