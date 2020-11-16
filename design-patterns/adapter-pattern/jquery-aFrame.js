// 适配器模式 针对的是接口，两套功能相近的接口，只有一些不一样，需要一套接口适配另一套
// A框架 更新到jquery，接口大体相同，但是命名不同
// a.o --- $.on
// a.c --- $.css
// ... 

window.A = $
a.o = function(){
  return $.on()
}

a.c = function(){
  return $.css()
}