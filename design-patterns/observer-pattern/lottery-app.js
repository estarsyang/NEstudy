// 抽奖应用
// 模块划分 1.html初始化  2.结果获取 3.运动控制  4. 运动
const prizeNum = 9
const observeOb =  new Observe()
const prizeDomList = []
let isFinal = false


function Observe(){
  this.message={};
  }
  Observe.prototype.regist=function(type,fn){
      this.message[type]=fn;
  }
  Observe.prototype.fire=function(type){
      this.message[type]();
  }
  
function htmlInit(target) { // 初始化dom元素
  for (let i = 0; i < prizeNum; i++) {
    let dom = document.createElement('div')
    dom.innerHTML = i
    dom.setAttribute('class', 'item')
    target.appendChild(dom)
    prizeDomList.push(dom)
  }

}

function getPrizeResult(initCircle = 20) {
  const _num = Math.random() *10 + initCircle
  return Math.floor(_num,0)
}


function moveControl(){
  const final = getPrizeResult()
  let speed = 200
  let baseCircle = Math.floor( final / prizeNum) // 总共要跑多少圈
  let finalPosition = final % prizeNum // 最终停在第几个位置
  let runCircle = 1 // 启动就是第一圈
  move({
    moveTime: prizeNum,
    speed
  })
  observeOb.regist('finished', function(){
    if(finalPosition === 0 && (runCircle === baseCircle)) return // 解决位置刚刚是奖品数的倍数
    let _time = prizeNum // 本次要给到 move 模块要转几次的记录
    speed -=10 // 下次运动速度减少
    runCircle++
    if(runCircle > baseCircle) { // 已经跑了圈数大于设定圈数，就要停止并要指定在哪里停下
      // isFinal = true
      _time = finalPosition
    }
    move({
      moveTime: _time,
      speed
    })
  })
}


function move({moveTime, speed}){
  console.log('moveTime==>>',moveTime);
  let nowIn = 0;
  let removeNum = prizeNum - 1
  let timer = setInterval(()=> {
    if(nowIn !== 0) {
      removeNum = nowIn - 1
    }
    prizeDomList[nowIn].setAttribute('class', 'item item-on')
    prizeDomList[removeNum].setAttribute('class', 'item')
    nowIn++
    if(nowIn === moveTime) {
      clearInterval(timer)
      if(moveTime === prizeNum) {
        observeOb.fire('finished')
      }
    }
    if(moveTime === 0) {
      clearInterval(timer)
    }
  }, speed)
  
}

htmlInit(document.getElementById('app'))
// console.log(prizeDomList);
moveControl()
