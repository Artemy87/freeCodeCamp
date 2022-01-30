function reverseList(list) {
  let res = [];
  list.map(i => res.unshift(i))
  return res;
}