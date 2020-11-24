function debounce(fn, delay) {
  let timer
  return function(...args) {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=> { // 箭头函数，this指向调用者
      fn(...args)
    },delay)
  }
}