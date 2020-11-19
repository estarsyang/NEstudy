// 观察者模式，适用于模块 之间不方便直接沟通，使用观察者代替直接沟通
// 基本机构 1.事件贮存器 2.事件注册器 3.事件触发器

// 将评论模块的信息给到首页模块

function observers() {
  this.eventList = {}
}

observers.prototype.register = function(eventName, fn) {
  this.eventList[eventName] =fn
}
observers.prototype.fire = function(eventName) {
  this.eventList[eventName]()
}
let observerOb =  new Observer()
function comment() {
  observerOb.register('hotComment', function() {
    let hotwords = ''
    return hotwords
  })
}

function index() {
  let hotwords = observerOb.fire('hotComment')
  // do something
}