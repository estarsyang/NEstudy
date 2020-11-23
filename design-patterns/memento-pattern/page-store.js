// 备忘录模式，缓存数据，记录操作
// 界面文章数据缓存，如果已经访问过的，就缓存下来，不再请求接口

function page() {
  let cache = {}
  return async function (pageName) {
    if(cache[pageName]) {
      return cache[pageName]
    } else {
      const res = await ajax.post('xxx',{pageName})
      cache[pageName] =res
      return res
    }
  }
}