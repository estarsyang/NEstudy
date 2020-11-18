var _data={
  imgArr:[{img:'xxxx',title:'default title1'},{img:'xxxx',title:'default title2'}],
  type:'normal',
  target: 'app'
}


var createImg  = (function() {
  var action = {
    create:function(config){
      let imgList = []
      let finallyHtml = ''
      let imgstr = '<div><img src="{{imgUrl}}" /></div><h2>{{title}}</h2>'
      const typeMap = {
        normal: function(arr){
          return arr
        },
        reverse:function(arr){
          return arr.reverse()
        }
      }
      config.imgArr.forEach(img => {
        let imgHtml = imgstr.replace('{{imgUrl}', img.img).replace('{{title}}', img.title)
        imglist.push(imgHtml)
      })
      let htmlArr = typeMap[config.type](imgList)
      finallyHtml = '<div>' + htmlArr.join('') + '</div>'
      return finallyHtml
    },
    display:function(config){
      let _html = this.create(config);
      config.target.innerHTML = _html
    }
  }
  return function execute(config) {
    action.display(config)
  }
})()
createImg(_data)