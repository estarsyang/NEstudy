// generator函数是异步编程的一种实现方法。它可以暂停，又可以从暂停的地方继续执行。
// generator函数本身也是函数，写法上和其他函数不同的地方在多了一个 *，本身调用也没什么区别。
// 在调用generator函数后，该函数并不执行，也不是函数运行结果，而是一个指向内部状态的指针对象(遍历器对象)
// 该对象拥有next(?param)、return(?param)、throw(?param) 等方法。
// 其中next 是往下执行，return终结遍历器，throw抛出错误，但不会影响流程。
// 执行next方法才是真正执行函数体内容，会返回 {value: xxxxx, done: true/false} 结构体的对象。可带参数，会当成上一个yield表达式的值
//    done为true表示遍历完成，此时 value为 undefined。
// 执行时,1. 遇到 yield,yield 后面有值或表达式，将值或表达式运算之后的值作为返回对象的value的值
//       2. 没有 yield，一直执行到return，将return的值作为返回对象的value的值
//       3. 没有return，将undefined 作为返回对象的value的值
function* helloGenerator() {
  yield 1;
  let first = yield 2;
  console.log('first', first); // 2
  let second = yield 3
  console.log('second', second); // 10
  yield second + 1
}
const generatorInstance = helloGenerator()
console.log(generatorInstance.next()); // {value:1,done:false} 第一次执行，yield后面是1，返回了1
console.log(generatorInstance.next()); // {value:2,done:false} 第二次执行，yield后面是2，返回了2，同时也将2赋给 了 first
console.log(generatorInstance.next()); // {value:3,done:false} 第三次执行，yield后面是3，返回了3，同时也将3赋给 了 second
console.log(generatorInstance.next(10)); // {value:11,done:false} 
// {value:1,done:false} 第四次执行，yield后面是seconde + 1。此时由于 next入参为 10，会被当成上一个yield的值，上一个值是second，
// 所以 seconde 就是 10，从而返回 11
console.log(generatorInstance.next()); // {value:undefined,done:true} 运行结束








// 一个线程存在多个协程，但同时只能运行一个协程。在generator函数中，yield挂起某个协程，next唤醒该协程

