// 尾调用，执行函数时，如果最后一步是执行某个函数，并且被调用函数的返回值直接被当前函数返回，就称为尾调用

function f(){
  return g()
}

// 要求： 
// 1. 尾调用不要访问区部作用域变量，即没有闭包
// 2. 返回尾调用，不再做其他事情
// 3. 尾调用返回值，直接返回调用它所在函数的调用者
function g(x) {
  return x
}
function f(){
  g() // 不符合规则三，没有返回
}
function f(){
  return 1+g() // 不符合规则2
}
function f(){
  let num = 0
  let g = ()=> num
  return g() // 不符合规则1, g函数中包含num变量，闭包
}

// 尾递归