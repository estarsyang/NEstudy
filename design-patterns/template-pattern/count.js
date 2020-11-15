function counter() {
  this.beforeCounter = []
  this.afterCounter = []
}

counter.prototype.addBefore = function(fn){
  this.beforeCounter.push(fn)
}
counter.prototype.addAfter = function(fn){
  this.afterCounter.push(fn)
}

counter.prototype.count = function(num){
  let _arr = [baseCount]
  let _resultNum = num
  _arr = this.beforeCounter.concat(_arr)
  _arr = _arr.concat(this.afterCounter)
  function baseCount(num){
    num+=4;
    num*=2;
    return num;
  }
  while (_arr.length > 0) {
    _resultNum = _arr.shift()(_resultNum)
  }
  return _resultNum
}

// demo
let countObject = new counter()
countObject.addBefore(function(num){
  num--;
  return num
})
countObject.addAfter(function(num){
  num *=2;
  return num
})

console.log(countObject.count(2));