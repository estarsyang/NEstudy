// 装饰者模式，主要是不方便改老方法，新建方法，内部调用老方法，然后再增加新逻辑
// 为原有 dom 增加 点击事件 不影响原有点击事件
function decorator(dom, fn) {
  if(typeof dom.onclick === 'function') {
    let original = dom.onclick
    dom.onclick = function(){
      original()
      fn()
    }
  }
}