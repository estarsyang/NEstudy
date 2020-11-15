
Vue.use(router);

// vue-router 内部 install 方法
let _Vue
function install(Vue) {
  if(install.installed && _Vue === Vue) return
  install.installed = true
  _Vue = Vue
}