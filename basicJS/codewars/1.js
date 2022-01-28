
function sum (numbers) {
  "use strict";
  return numbers.reduce((sum, cur) => sum + cur, 0)
};

console.log(sum([]));