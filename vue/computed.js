// computed
// 计算属性，一个对象，key值可以在外部被使用，也可以被监听。value值是一个函数，返回 0个或多个依赖变化后的处理值
// compute(() => {})
let x
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
  if(!queue.includes(dep)) {
    queue.push(dep)
    nextTick(flushQueue)
  }
}

let flushQueue = () => {
  let job
  while(queue.length > 0) {
    job = queue.shift()
    job && job()
  }
}

let compute = (fn) => {
  let value

  return {
    get value() {
      value = fn()
      return value
    }
  }
}

let computeValue = compute(() => count.value + 100)


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
    this.deps.forEach(dep => queueJob(dep))
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
count = ref(1)


watch(()=> {
  document.getElementById('app').innerText = `${count.value}  ${computeValue.value}`
})


document.getElementById('add').onclick = function() {
  x.value++
}