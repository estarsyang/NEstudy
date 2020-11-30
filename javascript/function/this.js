// 指向全局
function fn() {
  console.log(this);
}
fn() // window or global
// 执行调用者
let obj = {
  fn() {
    console.log(this);
  }
}
obj.fn() // obj
// 指向全局
let obj = {
  fn() {
    console.log(this); // obj
    function fnA() {
      console.log(this); // window
    }
    fnA()
  }
}
obj.fn()
// call apply 改变this指向
let obj = {
  fn() {
    console.log(this); // obj
    function fnA() {
      console.log(this); // obj
    }
    fnA.call(this)
    // fnA.apply(this)
  }
}
obj.fn()
// 构造函数调用
function Person() {
  this.a = 1
  // 如果没有返回其他对象，就默认返回 this,
  // return this
}
let p = new Person()
console.log(p.a); // 1,this 指向 实例对象
let corpObj = {
  a = 2
}
function Corp(){
  this.a = 1;
  return corpObj
}
let c = new Corp()
console.log(c.a); // 2 this 指向 corpObj

