// 异步编程的实现方法中，发布/订阅模式是一种常见实现方法。它是通过事件中心，接收发布者发布的事件,
// 通过订阅者所订阅发布者发布的事件，当发布者触发事件时，订阅者也能够同步触发事件的回调
// 假设顺序发起请求
function ajax(){
  //xxx
}
ajax.get('1.json',function(data){
  // 处理数据
  ajax.get('2.json',function(data){
    // 处理数据
    // ...
  })
})

const pubSubInstance =  new myPubSub()

ajax.get('1.json',function(data){
  // 处理数据
  pubSubInstance.publish('event1',data)
})
pubSubInstance.subscribe('event1', function(data){
  ajax.get('2.json',function(data){
    // 处理数据
  })
})

// 基本实现
class PubSub{
  constructor() {
    this.events ={}
  }
  publish(eventName, data) {
    if(this.events[eventName]) {
      this.events[eventName].forEach(cb => {
        cb.apply(this, data)
      })
    }
  }
  subscribe(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }
  unsubscribe(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => {
        return cb !== callback
      })
    } 
  }
}
const pubSubIn = new PubSub()
pubSubIn.publish('eventDemo', 'hello world')








