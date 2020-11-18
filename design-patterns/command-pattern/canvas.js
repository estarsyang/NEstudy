// 命令模式 向外提供命令，内部命令实现具体功能。实现调用和实现解耦
const commandList = [
  {type: '',config: {}}
]
const myCanvas = (function(){
  const action = {
    drawCircle:function(config){

    },
    drawRect:function(config){

    }
  }

  return function execute(commander) {
    commander.forEach((command)=> {
      action[command.type](command.config)
    })
  }
})()

myCanvas(commandList)
