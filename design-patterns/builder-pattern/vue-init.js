
function Vue(options) {
  if(!(this instanceof Vue)) {
    console.warn('应该使用 new 操作符来声明')
  }
  this._init = init;
  this._init(options)
}
function init(options) {

}
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);