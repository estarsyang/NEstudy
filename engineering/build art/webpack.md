### tapable
- 提供钩子函数
- 使用
    ```js
      const {SyncHook} = require('tapable')
      // 创建实例
      const syncHook = new SyncHook(['name','age'])

      // 注册事件
      syncHook.tap('1', (name,age)=> {console.log('1',name,age)})
      syncHook.tap('2', (name,age)=> {console.log('2',name,age)})
      syncHook.tap('3', (name,age)=> {console.log('3',name,age)})

      // 触发
      syncHook.call('petter',18)
      ```
### 工作流程
1. 初始化配置
    - 实例化 Compiler 对象，过程中实例化一系列的 Tapable hook
2. 准备工作
    - 初始化 plugin等，其实就是调用`plugin`上的apply方法，在Compiler中实例化的`hooks`上注册回调函数
3. resolve 源文件，构建module
4. 生成chunk
5. 构建资源
6. 最终文件生成
### 主要概念
#### entry 入口
- 单个多个
#### output 打包后的文件
- 打包后的bundle文件放置位置

### loader 处理 非js和json的文件，将一切格式转换为js模块，方便在浏览器中使用
### plugin 更高级的构建，打包功能
### mode 当前任务的构建环境，特定优化