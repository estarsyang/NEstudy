
// 表单校验，分为前端和后台校验。
// 这里以 input 为例，伪代码

input.onblur = function(value) {
  let validArr = [font,back]
  // 兼容同步异步
  async function validator() {
    let result = value
    while(validArr.length) {
      result = await validArr.shift()(result)
    }
    return result
  }
  validator.then((res)=> {
    console.log(res);
  })
}

// 前端校验
function font(value) { // 同步
  // ...校验逻辑
  const result = value
  return result
}
// 后台校验
function back(value) { // 异步
  // ...校验逻辑
  new Promise((resolve, reject) => {
    resolve(value)
  })
}