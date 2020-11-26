// 一定时间内触发一次。简单版 throttle
function throttle(fn, delay) {
  let timer;
  return function(...args) {
    if(timer) return
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    },delay)
  }
}