// 浏览器兼容时代，不同浏览器事件绑定不一样，需要进行兼容
function addEvent(dom, type,fn) {
  if(dom.addEventListener) {
    dom.addEventListener(type,fn,false);
  } else if(dom.attachEvent) {
    dom.attachEvent('on'+type,fn)
  } else {
    dom['on'+type]=fn
  }
}