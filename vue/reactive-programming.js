// 单个响应式，通过 Object.defineProperty 方法定义key值并设置对应的get set方法
// set 方法触发时执行视图更新的操作
let x
let y
let f = (n) => n *100 +100
let active
let onXChagne = function (cb) {
  active = cb
  active()
}

function ref (initValue) {
  let value = initValue
  return Object.defineProperty({}, 'value', {
    get(){
      return value
    },
    set(newValue) {
      value = newValue
      active()
    }
  })
}

x = ref(1) // 初始化

onXChagne(()=> { // 第一次加载数据，model -->> view
  y = f(x.value)
  console.log(y);
})
x.value = 2
x.value = 3


// 依赖收集
let x
let f = (n) => n *100 +100
let active
let onXChagne = function(cb) {
  active = cb
  active()
  active = null
}


class Dep {
  constructor() {
    this.deps = new Set()
  }

  depend() {
    if(active) {
      this.deps.add(active)
    }
  }


  notify() {
    this.deps.forEach(dep => dep())
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

x = ref(1)

onXChagne(()=> {
  y = f(x.value)
  console.log(y);
})

x.value = 2










