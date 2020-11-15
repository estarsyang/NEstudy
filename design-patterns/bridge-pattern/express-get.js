// express methods 方法实现
/*
function express(){
  
}
express.prototype.get = function(){

}
express.prototype.post = function(){
  
}
*/
// ...
// app.get app.post

const methods = ['get', 'post'] // ...
function express(){
  
}
methods.forEach(method => {
  app[method] = function(){
    route[method].apply(route,slice.call(arguments,1))
  }
})