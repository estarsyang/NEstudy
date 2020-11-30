// 1. 立即执行函数 IIFE  形成自己的作用域，内部和外部不影响，如果需要使用外部变量，传入
(
  function(win){
    // 逻辑
  }
)(window)
// 其他写法 ! new void + - ~ 
!function(win){}(window)
(function(){}())


// 2. 闭包 访问了另一个作用域中的变量的函数
function foo() {
  let a = 1
  function bar() {
    return ++a
  }
  console.log(bar());
}
foo()
// 3. 闭包+IIFE 封装（隐藏信息）
// 获取name，希望通过我们的方法去获取，但上面的写法调用者可以使用 obj.name 来获取name
let obj = {
  name: "tom",
  getName(){
    return this.name
  }
}
// 改造一下
let obj = (function(){
  let name = 'tom'
  return {
    getName(){
      return name
    }
  }
})()
console.log(obj.name); // undefined
console.log(obj.getName()); // tom