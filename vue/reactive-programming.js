// 单个响应式，通过 Object.defineProperty 方法定义key值并设置对应的get set方法
// set 方法触发时执行视图更新的操作
// let x
// let y
// // let f = (n) => n *100 +100
// let active


// function ref (initValue) {
//   let value = initValue
//   return Object.defineProperty({}, 'value', {
//     get(){
//       return value
//     },
//     set(newValue) {
//       value = newValue
//       active()
//     }
//   })
// }

// x = ref(1) // 初始化

// let onXChagne = function (cb) {
//   active = cb
//   active()
// }
// onXChagne(()=> { // 第一次加载数据，model -->> view
//   // y = f(x.value)
//   console.log(x.value);
// })
// x.value = 2
// x.value = 3







// 依赖收集
// ref初始化，Dep实例化对象已经保存有 ()=> {console.log(x.value)} 函数
// x.value = 2 时，触发 set 操作，set 中 depInstan notify 方法触发，遍历执行 保存的函数。
// 输出 x.value ，触发 get 同时添加 ()=> {console.log(x.value)} 函数
// 依次类推
let x
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
  // y = f(x.value)
  console.log(x.value);
})

x.value = 2
x.value = 3










