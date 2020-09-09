function minMaxNum(arr) {
  minNum = Math.min.apply(Math, arr);
  maxNum = Math.max.apply(Math, arr);
  console.log(minNum);
  console.log(maxNum);
}
var number = [2, 4, 2, 7, 8];
minMaxNum(number);
