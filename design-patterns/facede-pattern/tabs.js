// 外观模式 隐藏系统的复杂性，并向客户端提供一个客户端可以访问的接口。
// tabs组件，内部有 initHtml bindEvent changeTab 方法，但对方仅暴露出 init方法

function Tabs() {

}
Tabs.prototype.initHtml = function(){}
Tabs.prototype.bindEvent = function(){}
Tabs.prototype.changeTab = function(){}

Tabs.prototype.init = function (config){
  // config入参
  this.initHtml(config)
  this.bindEvent(config)
  this.changeTab(config)
}