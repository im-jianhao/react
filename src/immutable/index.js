const { fromJS, Set, Map, List, Seq, Range } = require("immutable");

const aRange = Range(1, Infinity) // 1 - 正无穷的数组
  .skip(1000) // 跳过前1000
  .map(n => -n)
  .filter(n => n % 2 === 0)
  .take(2) // 取前两位
  .reduce((r, n) => r * n, 1);

console.log(aRange); // 1006008
