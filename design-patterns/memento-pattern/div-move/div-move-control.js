function moveLeft(){
  console.log('left')
 }
 function moveRight(){
	console.log('RigmoveRight')	 
}
function moveTop(){
	console.log('Top')	 
}
function moveBottom(){
	console.log('bomoveBottom')	 
}

function MoveControl(){
  this.state = []
  this.moveAction = {
    left: moveLeft,
    right: moveRight,
    top: moveTop,
    bottom: moveBottom,
  }
}
MoveControl.prototype.run = function(){
  const moveArr = Array.prototype.slice.call(arguments);
  moveArr.forEach(action => {
    this.moveAction[action]
  })
}