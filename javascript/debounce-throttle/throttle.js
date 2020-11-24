function throttle(fn, delay) {
  let flag = true
  return function(...args) {
    console.log('flag', flag);
    console.log(1);
    if(!flag) return
    setTimeout(() => {
      fn(...args)
      flag = false
    },delay)
  }
}