process.argv.forEach((value,index)=> {
  console.log(`${index}: ${value}`);
  // node执行该文件 node process-argv one two=three four
  // 0: /usr/local/bin/node
  // 1: /Users/ddayang/Desktop/myself/NEstudy/engineering/node cli/process-argv.js
  // 2: one
  // 3: two=three
  // 4: four
})

// process.argv 本身是个array，第一个元素是 process.execPath。
// 第二个元素是将正在执行的JavaScript文件的路径
