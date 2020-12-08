// 函数柯里化，将多个入参拆解为单个入参，返回函数，再次调用
// 生成唯一数的函数
// 可以传入起始数，之后返回的数从这个值开始算起
// 还可以传入一个数字，返回的值是上次的数加上这个数字。如果没有传入数字，就返回的数字加1

// 函数不够优雅，需要在外部定义一个变量
let num = 0
function getNum(step, initNum) {
  if(initNum && num === 0) { // 确保起始数只能为一次
    num = initNum
  }
  num += step || 1
  return num
}
console.log(getNum(1,100)); // 101
console.log(getNum(2,101)); // 103, 再传入101不生效。
// 柯里化函数
function curryFn(initNum) {
  let num = initNum
  return function(step) {
    return num+= step || 1
  }
}
const getCurryFn = curryFn(100)
console.log(getCurryFn(1)); // 101
console.log(getCurryFn(2)); // 103