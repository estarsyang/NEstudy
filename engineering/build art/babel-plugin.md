### 导航
- 插件的本质
- 插件开发工具
- 实战案例

### 插件的本质
- 访问者模式
    - path 是我们对节点(Node)的引用
    - state 插件的状态
### 插件开发工具
- @babel/parser 将源代码解析成 AST
- @babel/generator 将AST生成js代码
- @babel/code-frame 生成错误信息并打印出错误原因和错误行数
- @babel/helper 提供了一些内置的帮助函数
- @babel/template 为parser提供模板引擎
- @babel/types 主要用来处理节点类型相关的问题(判断，创建)
- @babel/traverse 工具类，用来遍历AST树