const getCount = str => {
  var vowelsCount = 0;

  let current = str.split('');
  for (i of current) {
    switch(i) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          vowelsCount++;
          break;
    }
  }
  return vowelsCount;
}