function shortcut (string) {
  let res = '';
  let arr = string.split('');
  arr.map(i => {
    switch(i){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        break;
      default:
        res += i
    }
  })
  return res;
};