// 享元模式: 提取公共的部分，减少重复的代码

var fileBlob1,fileBlob2,fileBlob3
var data = [
  {
    type: 'img',
    file: fileBlob1,
  },
  {
    type: 'img',
    file: fileBlob2,
  },
  {
    type: 'file',
    file: fileBlob2,
  }
]
//文件上传
function Uploader(fileType,file){
  this.fileType=fileType;
   this.file=file;
}
Uploader.prototype.init=function(){
 //初始化文件上传的html
}
Uploader.prototype.delete=function(){
 //删除掉该html
}
Uploader.prototype.uploading=function(){
 //上传
}
// 多个文件上传
data.forEach(item => {
  let uploaderObject = new Uploader(item.key, item.file)
  uploaderObject.uploading()
})

// 享元模式修改
function Uploader(){
  
}
Uploader.prototype.init=function(){
 //初始化文件上传的html
}
Uploader.prototype.delete=function(){
 //删除掉该html
}
Uploader.prototype.uploading=function(fileType,file){
 //上传
 this.fileType=fileType;
  this.file=file;
}
const uploaderObject = new Uploader
data.forEach(item => {
  uploaderObject.uploading(item.key, item.file)
})