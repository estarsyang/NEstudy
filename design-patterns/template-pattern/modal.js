// 一系列弹窗行为

// 模板模式，有基础操作，在基础操作的基础上扩展其他操作

function basePop(word,size){
  this.word=word;
  this.size=size;
  this.dom=null;
}

basePop.prototype.init= function(){
  var div=document.createElement('div');
	div.innerHTML=this.word;
	div.style.width=this.size.width+'px';
	div.style.height=this.size.height+'px';
	this.dom=div;
}
basePop.prototype.hidden = function(){
  this.dom.style.display='none';
}
basePop.prototype.confirm = function(){
  this.dom.style.display='none';
}
// ajaxPop

function ajaxPop(word,size){
  basePop.call(this,word,size);
}

ajaxPop.prototype = new basePop()
var hidden  = ajaxPop.prototype.hidden
ajaxPop.prototype.hidden = function(){
  hidden.call(this)
  $.get('xxxx')
}
var confirm=ajaxPop.prototype.confirm;
ajaxPop.prototype.confirm = function(){
  confirm.call(this)
  // 添加 confirm 特有操作
  console.log('222');
}

var confirmPop = new ajaxPop('sendmes',{width:100,height:300})
confirmPop.init()
confirmPop.confirm()