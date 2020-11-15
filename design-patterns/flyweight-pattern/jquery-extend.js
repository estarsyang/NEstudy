var jquery={}
jquery.fn = {}

jquery.extend=jquery.fn.extend = function(){
  /*
  if(arguments.length === 1){
    for(var key in arguments[0]){
      this[key]=arguments[0][key]
    }
  } else if(arguments.length === 2){
    for(var key in arguments[1]){
      arguments[0][key]=arguments[1][key]
    }
    return arguments[0]
  }
  */
  let target = arguments[0]
  let source
  if(arguments.length ===1) {
    target = this
    source = arguments[0]
  } else if(arguments.length === 2) {
    target = arguments[0]
    source = arguments[1]
  }
  for(var key in source){
    target[key]=source[key]
  }
  return target
}