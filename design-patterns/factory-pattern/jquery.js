

(function() {
  var Jquery = function(selector,content) {

    return new Jquery.fn.init(selector, content,rootJquery)

  }
  Jquery.fn = jquery.prototype = {
    init: function(){

    }
  }
  jquery.fn.init = jquery.fn
  jquery.extend = jquery.fn.extend=function(){}

  jquery.extend({})

  window.$=jquery
})()