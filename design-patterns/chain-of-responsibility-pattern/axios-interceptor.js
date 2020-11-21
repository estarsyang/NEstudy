// 职责链模式，以类似于链条形式组成，依次触发，传递数据到下一个函数
// axios 拦截器，包括 请求拦截 和响应拦截

function Axios(config) { // 定义拦截器
  this.interceptors = {
    request: new interceptorsManner(),
    response: new interceptorsManner()
  }
}

Axios.prototype.request = function(){
  let chain = [dispatchEvent,undefined]  // undefined兼容两两调用。
  let promise = Promise.resolve()
  this.interceptors.request.handlers.forEach((interceptor)=> {
    chain.unshift(interceptor.fulfilled, interceptor.rejected)
  })
  this.interceptors.response.handlers.forEach((interceptor)=> {
    chain.push(interceptor.fulfilled, interceptor.rejected)
  })
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift())
  }
  return promise
}

// 拦截器使用方式
// axios.request.use(sucessCb,failCb)
// axios.response.use(sucessCb,failCb)
function interceptorsManner() {
  this.handlers = []
}
interceptorsManner.prototype.use = function(fulfilled, rejected) {
  // ...入参校验
  this.handlers.push({
    fulfilled,
    rejected
  })
}