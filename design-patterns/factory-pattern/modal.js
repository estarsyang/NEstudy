// 创造是多种弹窗，内容颜色各不相同
function infoPop(){
  console.log('infoPop');
}
function confirmPop(){
  console.log('confirmPop');

} 
function cancelPop(){
  console.log('cancelPop');

}
function Modal(type,content,color) {
  console.log(this);
  if(this instanceof Modal) { // new 操作符
    let s = new this[type](content,color)
    return s
  } else { // 未使用new操作符
    return new Modal(type,content,color)
  }
}

Modal.prototype.infoPop = infoPop;
Modal.prototype.confirmPop = confirmPop;
Modal.prototype.cancelPop = cancelPop;

var data=[
  {
  	type:'infoPop',
  	content:'hello',
  	color:'red'
  },
  {
  	type:'infoPop',
  	content:'good good study',
  	color:'red'
  },  
  {
  	type:'confirmPop',
  	content:'good good study',
  	color:'green'
  },    
];
data.forEach((item)=>{
  console.log('adf', Modal(item.type,item.content,item.color));
})

data.forEach((item)=>{
  console.log('adf',new Modal(item.type,item.content,item.color));
})
