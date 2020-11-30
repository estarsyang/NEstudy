// 函数参数传递方式
// 按值传递： 形参的值是调用函数所传的实参的副本
// 按引用传递： 形参的值是调用函数所传入实参的引用

// 基本类型，按值传递
let a = 1
function fn(a) {
  a = 2
}
console.log(a); // 1

// 对象类型 - 引用传递
let aObj = {
  a:1
}
function fn(aObj) {
  aObj.b = 2
}
fn(aObj);
console.log(aObj); // {a:1,b:2}
// 对象类型 - 按值传递
let aObj = {
  a:1
}
function fn(aObj) {
  aObj = 2
}
fn(aObj);
console.log(aObj); // {a:1}
// 总的来说，是按值传递，传递的是值的副本。如果副本的引用被修改了，那么对外部的变量不会有任何的修改。
// 引用没有变化，则外部变量会进行修改