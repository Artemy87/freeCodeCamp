function abbrevName(name){
  let cur = name.split(' ');
  let first = cur[0].slice(0, 1).toUpperCase();
  let second = cur[1].slice(0, 1).toUpperCase();
  return `${first}.${second}`
    // code away

}