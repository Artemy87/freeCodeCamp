function orderFood(list) {
  let obj = {}
  let arr = list.map(el => {
    !obj.hasOwnProperty(el.meal) ? obj[el.meal] = 1 : obj[el.meal] = obj[el.meal] + 1 
  })
  return obj;
};