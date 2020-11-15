// 桥接模式，拆分，减分代码。抽取公共部分
// 一组菜单，每种菜单都有不同的内容和效果
/*
function menuItem(word){
  this.word="";
  this.dom=document.createElement('div');
  this.dom.innerHTML=this.word;  
}
var menu1=new menuItem('menu1');
var menu2=new menuItem('menu2');
var menu3=new menuItem('menu3');
menu1.onmouseover=function(){
  menu1.style.color='red';
}
menu2.onmouseover=function(){
  menu1.style.color='green';
}
menu3.onmouseover=function(){
  menu1.style.color='blue';
}
menu1.onmouseout=function(){
  menu1.style.color='white';
}
menu2.onmouseout=function(){
  menu1.style.color='white';
}
menu3.onmouseout=function(){
  menu1.style.color='white';
}

*/
// 桥接模式
function menuItem(word,color){
  this.word=word;
  this.color = color;
  this.dom=document.createElement('div');
  this.dom.innerHTML=this.word;  
}

menuItem.prototype.eventBind=function(){
  const self=this;
  this.dom.onmouseover=function(){
    this.style.color = self.color.colorOver
  }
  this.dom.onmouseout=function(){
    this.style.color = self.color.colorOut
  }
}
function menuColor(colorOver, colorOut) {
  this.colorOver = colorOver
  this.colorOut = colorOut
}

var data=[{word:'menu1',color:['red','black']},{word:'menu2',color:['green','black']},{word:'menu3',color:['blue','black']}]
data.forEach(item => {
  new menuItem(item.word, new menuColor(item.color[0], item.color[1])).eventBind()
})