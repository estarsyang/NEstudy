// 数据迭代器，项目中根据需要，添加特定逻辑
// 数据处理函数，传入对象数组，判断对象中是否含有指定值
// 如果传入方法和指定值，则用指定方法处理
// 如果传入的属性和指定值，则返回该属性值与指定值相同的对象

let data = [{num:1},{num:2},{num:3}]

function i(data) {
  function Iterator(data) {
    this.data = data
  }
  Iterator.prototype.getHasSomenum =function(handler,num) {
    let arr = []
    let handlerFn
    if(typeof handler === "function") {
      handlerFn = handler
    } else {
      handlerFn = function(item) {
        if(item[handler] === num) {
          return item
        }
      }
    }
    for(let i = 0; i < this.data.length; i++) {
      let result = handlerFn(this.data[i]) // 有返回值，证明属性命中或自定义函数命中
      if(result) { // 保存当前 对象
        arr.push(result)
      }
    }
    return arr
  }
  return new Iterator(data)
}
console.log(i(data).getHasSomenum('num',1));