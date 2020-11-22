// 状态模式
// 用来优化if-else分支，使代码变得整洁方便扩展
// 根据角色的不同显示不同的内容
function showPart1(){
  console.log(1);
}
function showPart2(){
 console.log(2);
}
function showPart3(){
 console.log(3);
}

function ShowControl() {
  this.state =''
  this.role = {
    boss: function(){
      showPart1()
      showPart2()
      showPart3()
    },
    manner: function(){
      showPart2()
      showPart3()
    },
    staff: function(){
      showPart3()
    }
  }
}

ShowControl.prototype.show = function(){
  axios.get('xxx').then((res)=>{
    this.status=res;
    this.power[self.status]();
  })
}

new ShowControl().show()