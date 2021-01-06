// nextTick 原理
// vue 异步更新队列 https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97
// 在响应式操作中，如果内容依赖于很多数据，每一个数据的变化都会引起内容的变化，这样会很耗费性能。
// 如下代码 在forEach 1 中，没有进行异步更新，将会输出多次 每个变量的变化都会输出一次
// 因此，我们可以进行异步更新，将所有的数据变化监听起来（forEach 2），等数据变化结束之后再统一更新。只会输出一次。
// 利用了 Promise.resolve().then() 方法
// 这里采用的是 nextTick 微任务，宏任务完成之后，再执行微任务
let x
let y
let z
let active
let watch = function(cb) {
  active = cb
  active()
  active = null
}

let queue = []
let nextTick = (cb) => {
  return Promise.resolve().then(cb)
}

let queueJob = (dep) => {
  if(!queue.includes(dep)) { // if 1
    queue.push(dep)
    nextTick(flushQueue)
  }
  // // if 2 （去掉去重，队列保存三次相同的函数）
  // queue.push(dep)
  // nextTick(flushQueue)
}

let flushQueue = () => {
  let job
  while(queue.length > 0) {
    job = queue.shift()
    job && job()
  }
}


class Dep {
  constructor() {
    this.deps =  new Set()
  }

  depend() {
    if(active) {
      this.deps.add(active)
    }
  }


  notify() {
    // this.deps.forEach(dep => dep()) // forEach 1
    this.deps.forEach(dep => queueJob(dep)) // forEach 2
  }
}

function ref(initValue) {
  let value = initValue
  let depInstan = new Dep()
  return Object.defineProperty({}, 'value', {
    get() {
      depInstan.depend()
      return value
    },
    set(newValue) {
      value = newValue
      depInstan.notify()
    }
  })
}
// 初始化的时候，x y z 的 depInstan 中 deps 都包含了相同的函数，deps长度为1。 
// 即 ()=> {console.log(`${x.value} ${y.value} ${z.value}`);}
x = ref(1)
y = ref(2)
z = ref(3)


watch(()=> {
  // y = f(x.value)
  console.log(`${x.value} ${y.value} ${z.value}`);
})
// 触发 set 方法时，遍历 各自 depInstan 的 deps，由于都调用了 queueJob 增加队列，而队列是异步且做了去重处理。
// 所以，真正被添加到 队列中就一个方法。所以，等变量全部更新完之后(即同步操作)，才触发这个方法。输出现在的值
// 去掉去重，将会输出 三次变化后的值
x.value = 10
y.value = 20
z.value = 30

console.log('test',x.value); // 采用了异步更新的方法，这里的是同步方法，所以会直接输出，在异步之前

nextTick(() => {
  console.log(x.value); // 往 Promise.resolve().then() 方法添加，排在最后，所以的更新完之后再执行，输出 10
});