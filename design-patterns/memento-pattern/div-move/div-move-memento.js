// div运动，可前进可后退
function moveDiv() {
  this.moveList= []
  this.nowState = 0
}
moveDiv.prototype.move = function(type,num) {
  moveDiv(type,num)
  this.moveList.push({
    type,
    num
  })
  this.nowState = this.moveList.length - 1
}
moveDiv.prototype.init = function(target) {
  const moveDom = document.createElement('div')
  moveDom.setAttribute('class','move-item')
  target.appendChild(moveDom)
}

moveDiv.prototype.go = function(){
  if(this.nowState < this.moveList.length) {
    this.nowState++
    const _state = this.moveList[this.nowState]
    moveDiv(_state.type,_state.num);
  }
}
moveDiv.prototype.back=function(){
  if(this.nowState >= 0){
      this.nowState--;
      const _state=this.stateList[this.nowState];
      moveDiv(_state.type,_state.num);
  }
}


