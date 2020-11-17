// vue 双向绑定是 利用了对象的 defineProperty 属性，但是数组没有这个方法。
// 数组的更新是通过重写部分原方法，增加 通知方法，从而引起视图更新

const methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

const arrayPrototype =  Array.prototype // 保存数组原型
const arrayMethods = Object.create(arrayProto); // 新建一个数组原型的备份

methods.forEach(method => {
  arrayMethods[method] = function() {
    const original = arrayPrototype[method] // 保留原方法
    const result = original.apply(this, arguments) // 执行原方法，修改this指向
    dep.notify(); // 通知视图更新
    return result // 返回方法执行之后的数据
  }
})