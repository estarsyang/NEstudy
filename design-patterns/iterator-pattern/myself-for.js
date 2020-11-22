// 迭代器模式，构建自己的for循环，添加自己的操作
// 实现一个自己的for循环

function Iterator(data){
  this.data = data;
}
Iterator.prototype.dealEach = function(fn){
  if(this.data instanceof Array) {
    for(let i = 0; i < this.data.length; i++) {
      fn(this.data[i],i)
    }
  } else {
    for(let key in this.data) {
      fn(this.data[key],key)
    }
  }
}
